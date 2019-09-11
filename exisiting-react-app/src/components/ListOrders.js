import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListOrders extends Component {
    render() {
        return (
            <div className="order-list item-list mb-3">
                {this.props.orders.map(item => (
                    <div className="order-item col media py-3">
                        <div className="mr-3">
                            <button className="order-delete btn btn-sm btn-danger"
                                onClick={() => this.props.deleteOrder(item)}>
                                <FaTimes />
                            </button>
                        </div>

                        <div className="order-info media-body">
                            <div className="order-head d-flex">
                                <span className="order-customer-name" onClick={this.go}>{item.customerName}</span>
                                <span className="order-date ml-auto">
                                    <Moment
                                        date={item.orderDate}
                                        parse="YYYY-MM-DD"
                                        format="MMM-D"
                                    />
                                </span>
                            </div>
                        </div>

                        <div className="order-number">
                            <span className="label-item">Order Number:</span>
                            <span>{item.orderNumber}</span>
                        </div>

                        <div className="order-price">{item.orderPrice}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ListOrders;
