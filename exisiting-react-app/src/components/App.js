import React, { Component } from 'react';
import '../css/App.css';
import { without } from 'lodash';
import { Link, Router } from '@reach/router';

import AddOrders from './AddOrders';
import SearchOrders from './SearchOrders';
import ListOrders from './ListOrders';
import Admin from './Admin';
import Login from './Login';
import Vendor from './Vendor';

class App extends Component {

    constructor() {
        super();
        this.state = {
            customerOrders: [],
            formDisplay: false,
            orderBy: 'customerName',
            orderDir: '',
            searchText: ''
        };
        this.deleteOrder = this.deleteOrder.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.changeListOrder = this.changeListOrder.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.searchOrders = this.searchOrders.bind(this);
    }

    addOrder(order) {
        let tempOrders = this.state.customerOrders;
        tempOrders.unshift(order);
        this.setState({
            customerOrders: tempOrders
        });
    }

    searchOrders(searchText) {
        this.setState({
            searchText: searchText
        });
    }

    changeListOrder(orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }

    deleteOrder(order) {
        let tempOrders = this.state.customerOrders;
        tempOrders = without(tempOrders, order);

        this.setState({
            customerOrders: tempOrders
        });
    }

    toggleForm() {
        this.setState({
            formDisplay: !this.state.formDisplay
        });
    }

    componentDidMount() {
        fetch('./data.json')
            .then(response => response.json())
            .then(result => {
                const orders = result.map(order => {
                    return order;
                });
                this.setState({
                    customerOrders: orders
                });
            });
    }

    render() {

        let order;
        let filteredOrders = this.state.customerOrders;

        if (this.state.orderDir === 'asc') {
            order = 1;
        } else {
            order = -1
        }

        filteredOrders = filteredOrders.sort((a, b) => {
            if (a[this.state.orderBy].toLowerCase() < 
                b[this.state.orderBy].toLowerCase()
            ) {
                return -1 * order;
            } else {
                return 1 * order;
            }
        }).filter(eachItem => {
            return(
                eachItem['customerName']
                .toLowerCase()
                .includes(this.state.searchText.toLowerCase()) ||

                eachItem['orderNumber']
                .toLowerCase()
                .includes(this.state.searchText.toLowerCase()) 
            )
        });

        return (
            <main className="page bg-white" id="order-ratings">
                <Router>
                    <Admin className="nav-item nav-link" path="/admin" />
                    <Login className="nav-item nav-link" path="/login" />
                    <Vendor className="nav-item nav-link" path="/vendor" />
                </Router>
                <nav classname="site-nav navbar-nav ml-auto">
                    <Link className="nav-item nav-link" to="/admin">Admin</Link>
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                    <Link className="nav-item nav-link" to="/vendor">Vendor</Link>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 bg-white">
                            <AddOrders formDisplay={this.state.formDisplay}
                                        toggleForm={this.toggleForm}
                                        addOrder={this.addOrder} />
                            <SearchOrders orderBy = {this.state.orderBy}
                                          orderDir = {this.state.orderDir}
                                          changeListOrder = {this.changeListOrder}
                                          searchOrders={this.searchOrders} />
                            <ListOrders orders={filteredOrders} 
                                        deleteOrder={this.deleteOrder} />
                        </div>
                    </div>
                </div>
            </main>
        )
    };
}

export default App;
