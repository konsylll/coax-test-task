import React, { Component } from 'react';
import StarRaitingComponent from 'react-star-rating-component';

export default class ProductTable extends Component {
    constructor() {
      super();
      this.state = {
        products: []
      };
      this.sorted = false;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            products: nextProps.products
        });
    }

    _sortProductsByCallback = (callback) => {
      const sorted = this.state.products.sort(callback);
      this.setState({products: sorted});
    };

    _sortProducts = (sortBy) => {
        let callback;
        switch(sortBy) {
            case 'id':
              this.sorted !== 'id' ? callback = (a,b) => a.id > b.id : callback = (a,b) => a.id < b.id;
              break;
            case 'name':
              this.sorted !== 'name' ? callback = (a,b) => a.name.toLowerCase() > b.name.toLowerCase() : callback = (a,b) => a.name.toLowerCase() < b.name.toLowerCase();
              break;
            case 'rating':
              this.sorted !== 'rating' ? callback = (a,b) => a.rating > b.rating : callback = (a,b) => a.rating < b.rating;
              break;
            case 'price':
              this.sorted !== 'price' ? callback = (a,b) => parseInt(a.price.substring(1), 10) > parseInt(b.price.substring(1), 10)
                : callback = (a,b) => parseInt(a.price.substring(1), 10) < parseInt(b.price.substring(1), 10);
              break;
            default:
        }
        this.sorted !== sortBy ? this.sorted = sortBy : this.sorted = false;
        this._sortProductsByCallback(callback);
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => {this._sortProducts('id')}}>#</th>
                    <th onClick={() => {this._sortProducts('name')}}>Product Name</th>
                    <th onClick={() => {this._sortProducts('rating')}}>Rating</th>
                    <th onClick={() => {this._sortProducts('price')}}>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.state.products.map((item, index) =>
                    <tr key={index}>
                        <td>
                            {item.id}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            <StarRaitingComponent editing={false} name={'rating'} value={item.rating} />
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

