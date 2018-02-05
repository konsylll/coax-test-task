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
        }
    }

    componentDidMount() {
        axios.get('data.json').then((data) => {
            this.setState({
                data: data.data
            });
        });
    }


    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <div className={"row"}>
                        <div className={"col-2"}>
                            <div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Tablets</label>
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