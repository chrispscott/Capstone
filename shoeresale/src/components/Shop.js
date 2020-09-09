import React, { Component } from 'react'

export default class Shop extends Component {

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
            <section>
                <div className="container-shop">
                    <div className="neo-product">
                    {this.state.shoe1}
                    </div>
                    <div className="neo-product"></div>
                    <div className="neo-product"></div>
                </div>
                <div className="container-shop">
                    <div className="neo-product"></div>
                    <div className="neo-product"></div>
                    <div className="neo-product"></div>
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
