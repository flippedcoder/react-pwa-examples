import React, { Component } from 'react';

class SearchOrders extends Component {
    render() {
        return (
            <div className="search-orders row justiffy-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="searchOrders"
                            type="text"
                            className="form-control"
                            aria-label="Search Orders"
                            onChange={e => this.props.searchOrders(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Sort by: <span className="caret"></span>
                            </button>

                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                <button
                                    className={
                                        "sort-by dropdown-item " +
                                        (this.props.orderBy === 'customerName' ? 'active' : '')
                                    }
                                    href="#"
                                    onClick={
                                        e => this.props.changeListOrder('customerName', this.props.orderDir)
                                    }
                                >
                                    Customer Name
                                    </button>
                                <button
                                    className={
                                        "sort-by dropdown-item " +
                                        (this.props.orderBy === 'orderDate' ? 'active' : '')
                                    }
                                    href="#"
                                    onClick={
                                        e => this.props.changeListOrder('orderDate', this.props.orderDir)
                                    }>
                                    Order Date
                                    </button>
                                <button
                                    className={
                                        "sort-by dropdown-item " +
                                        (this.props.orderBy === 'orderPrice' ? 'active' : '')
                                    }
                                    href="#"
                                    onClick={
                                        e => this.props.changeListOrder('orderPrice', this.props.orderDir)
                                    }>
                                    Order Price
                                    </button>
                                <button
                                    className={
                                        "sort-by dropdown-item " +
                                        (this.props.orderBy === 'orderNumber' ? 'active' : '')
                                    }
                                    href="#"
                                    onClick={
                                        e => this.props.changeListOrder('orderNumber', this.props.orderDir)
                                    }>
                                    Order Number
                                    </button>
                                <div role="separator" className="dropdown-divider" ></div>
                                <button
                                    className={
                                        "sort-by dropdown-item " +
                                        (this.props.orderBy === 'asc' ? 'active' : '')
                                    }
                                    href="#"
                                    onClick={
                                        e => this.props.changeListOrder(this.props.orderBy, 'asc')
                                    }>
                                    Asc
                                    </button>
                                <button
                                    className={
                                        "sort-by dropdown-item " +
                                        (this.props.orderBy === 'desc' ? 'active' : '')
                                    }
                                    href="#"
                                    onClick={
                                        e => this.props.changeListOrder(this.props.orderBy, 'desc')
                                    }>
                                    Desc
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchOrders;
