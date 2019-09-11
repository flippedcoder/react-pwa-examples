import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddOrders extends Component {

    constructor() {
        super();
        this.state = {
            customerName: '',
            orderNumber: '',
            price: '',
            orderDate: '',
            orderNotes: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        let tempOrder = {
            customerName: this.state.customerName,
            orderNumber: this.state.orderNumber,
            orderDate: this.state.orderDate,
            orderNotes: this.state.orderNotes,
            price: this.state.price
        }

        this.props.addOrder(tempOrder);
        
        this.setState({
            customerName: '',
            orderNumber: '',
            price: '',
            orderDate: '',
            orderNotes: ''
        });

        this.props.toggleForm();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-order')
                }>
                <div className="order-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}>
                    <FaPlus />
                    Add Order
                </div>

                <div className="card-body">
                    <form id="orderForm" noValidate onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="customerName"
                                readOnly>
                                Customer Name
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="customerName"
                                    placeholder="Customer's Name"
                                    value={this.state.customerName}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="orderNumber"
                                readOnly>
                                Order Number
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="orderNumber"
                                    placeholder="Order Number"
                                    value={this.state.orderNumber}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="orderDate"
                                readOnly>
                                Order Date
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="orderDate"
                                    id="orderDate"
                                    value={this.state.orderDate}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="price"
                                readOnly>
                                Price
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    placeholder="Price"
                                    value={this.state.price}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="orderNotes"
                                readOnly>
                                Order Notes
                            </label>
                            <div className="col-md-10">
                                <textarea
                                    className="form-control"
                                    name="orderNotes"
                                    id="orderNotes"
                                    rows="4"
                                    cols="50"
                                    placeholder="Order Notes"
                                    value={this.state.orderNotes}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block ml-auto">
                                        Add Order
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddOrders;
