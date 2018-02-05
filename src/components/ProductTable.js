import React, { Component } from 'react';

export default class ProductTable extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Rating</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.props.products.map((item, index) =>
                    <tr key={index}>
                        <td>
                            {item.id}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.rating}
                        </td>
                        <td>
                            {item.price}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

