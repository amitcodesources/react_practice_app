import React, { Component } from 'react';
import axios from 'axios';
import { BounceLoader } from 'react-spinners'

class ProductData extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            load_start:true,
            error: ''
        };
    }

    componentDidMount(){
        axios.get("https://justolearnapp.herokuapp.com/api/addproduct")
                .then(response => {
                    this.setState({
                        products: response.data.result,
                        load_start:false
                    }).catch(error => {
                        console.log("error", error)
                        this.setState({load_start:false})
                    });
                });
    }


    render() {
        // console.log(this.state.products);
        return(
            <div>
                <div className="spin-loader">
                    <BounceLoader loading={this.state.load_start}></BounceLoader>
                </div>
                
                <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Names</th>
                        <th>Product Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                        { this.state.products ?
                            this.state.products.map((item,i)=>
                                <tr key={item._id}>
                                    <td>{i}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ): "Data Not Found"
                        }
                    
                </tbody>
                </table>
            </div>
        )
    }
}

export default ProductData;