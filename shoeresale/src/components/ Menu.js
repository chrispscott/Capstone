import React, { Component } from 'react'
import axios from "axios";

export default class  Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            shoe1:""
            
            
         }
    }

    async getshoes(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res.data[0].shoebrand);
        this.setState({
            shoe1: res.data[0].shoebrand
        })
    };

    componentDidMount() {
        this.getshoes()
    }

    render() {
        return (
            <header>
                <div className="title">Shoe Resale</div>
                <nav>
                    <a  href="##">Home</a>
                    <a  href="##">about</a>
                    <label> Create</label>
                    <input type='text' value=''></input>
                </nav>
                <h1>
                    hello 
                    {this.state.shoe1}
                </h1>
            </header>
        )
    }
}
