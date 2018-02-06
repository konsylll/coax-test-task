import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import ProductTable from './components/ProductTable';

class App extends Component {

    constructor(){
        super();
        this.state = {
            data: []
        };
        this.products = [];
        this.types = [];
    }

    componentDidMount() {
        axios.get('data.json').then((data) => {
            this.products = data.data;
            this.setState({
                data: this.products
            });
        });
    }

    _toggleProductType = (type) => {
        let typeIndex = this.types.indexOf(type);
        if(this.types.indexOf(type)+1){
            this.types.splice(typeIndex,1)
        } else {
            this.types.push(type)
        }
        this.types.length ?
            this.setState({
                data: this.products.filter((product) => this.types.indexOf(product.type) !== -1)
            }) :
            this.setState({data: this.products});
    };

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <div className={"row"}>
                        <div className={"col-2 app-categories"}>
                            <div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" onChange = {() => {this._toggleProductType('notebook')}}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Notebooks</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" onChange = {() => {this._toggleProductType('tablet')}}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Tablets</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" onChange = {() => {this._toggleProductType('phone')}}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Mobile Phones</label>
                                </div>
                            </div>
                        </div>
                        <div className={"col-10"}>
                            <ProductTable products={this.state.data} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;