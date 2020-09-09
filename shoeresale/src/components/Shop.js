import React, { Component } from 'react'
import axios from "axios"

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            shoe1:"",
            shoe:"",
            shoe33:"",
            shoe3:"",
            shoe44:"",
            shoe4:"",
         }
    }

    async getshoes(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res.data[0].shoebrand);
        this.setState({
            shoe1: res.data[0].shoebrand
        })
    };

    async getshoes1(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res.data[0].shoeprice);
        this.setState({
            shoe: res.data[0].shoeprice
        })
    };




    async getshoes33(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res.data[2].shoebrand);
        this.setState({
            shoe33: res.data[2].shoebrand
        })
    };

    async getshoes3(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res.data[2].shoeprice);
        this.setState({
            shoe3: res.data[2].shoeprice
        })
    };




    async getshoes44(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res.data[2].shoebrand);
        this.setState({
            shoe44: res.data[2].shoebrand
        })
    };

    async getshoes4(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res.data[3].shoeprice);
        this.setState({
            shoe4: res.data[3].shoeprice
        })
    };





    componentDidMount() {
        this.getshoes()
        this.getshoes1()
        this.getshoes33()
        this.getshoes3()
        this.getshoes44()
        this.getshoes4()
    }


    render() {
        return (
            <section>
                <div className="container-shop">
                    <div className="neo-product">
                    {this.state.shoe1}
                    {this.state.shoe}
                    </div>
                    <div className="neo-product">
                    {this.state.shoe33}
                    {this.state.shoe3}
                    </div>
                    <div className="neo-product">
                    {this.state.shoe44}
                    {this.state.shoe4}
                    </div>
                </div>
                <div className="container-shop">
                    <div className="neo-product">
                    {this.state.shoe44}
                    {this.state.shoe4}
                    </div>
                    <div className="neo-product">
                    {this.state.shoe1}
                    {this.state.shoe}
                    </div>
                    <div className="neo-product">
                    {this.state.shoe33}
                    {this.state.shoe3}
                    </div>
                </div>
                <div className="container-shop">
                    <div className="neo-product"></div>
                    <div className="neo-product"></div>
                    <div className="neo-product"></div>
                </div>
                
                
                
            </section>
        )
    }
}
