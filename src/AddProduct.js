import React, { Component } from 'react'
import axios from 'axios'
import {BounceLoader} from 'react-spinners'
import { Form, Button } from 'react-bootstrap'

export default class AddProduct extends Component {
    constructor() {
        super()
        // this.state = { name: 'Bata', price: '10000', description: 'sports' ,start:false}
        this.state = { name: '', price: '', description: '' ,start:false}
    }

    getProductName = (event) => {
        console.log("data", event.target.value)
        this.setState({ name: event.target.value })

    }
    getPrice = (event) => {
        console.log(event.target.value)
        this.setState({ price: event.target.value })

    }
    getDescription = (event) => {
        console.log(event.target.value)
        this.setState({ description: event.target.value })

    }

    onSubmitHandle = (event) => {

        console.log("name", this.state.name)
        console.log("price", this.state.price)
        console.log("description", this.state.description)
        event.preventDefault()
         this.setState({start:true})
        axios.post("https://justolearnapp.herokuapp.com/api/addproduct", this.state).then(response => {
            console.log("response", response)
            this.setState({start:false})
            this.setState({name:''})
            this.setState({price:''})
            this.setState({description:''})
        }).catch(error => {
            console.log("error", error)
            this.setState({start:false})
        })

    }

  render() {
    return (
                <div className='container w-25 mt-5'>
                    <Form onSubmit={this.onSubmitHandle}>
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Product Name</Form.Label>
                            <Form.Control type="text" value={this.state.name} onChange={this.getProductName} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Enter Product Price</Form.Label>
                            <Form.Control type="text" value={this.state.price} onChange={this.getPrice} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Enter Product Description</Form.Label>
                            <Form.Control type="text" value={this.state.description} onChange={this.getDescription} />
                        </Form.Group>
                        

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <BounceLoader loading={this.state.start}></BounceLoader>
                    </Form>
                </div>
    )
  }
}


