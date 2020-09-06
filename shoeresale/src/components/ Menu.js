import React, { Component } from 'react'

export default class  Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            shoe1
            
            
         }
    }


    async getshoes(){
        const res = await axios.get("http://localhost:8080/Shoes")
        console.log(res);
        this.setState({
            shoe1: res.data.shoebrand
        })
    };




    componentDidMount() {
        this.getshoes
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
                <p>
                    hello 
                    {this.state.shoe1}
                </p>
            </header>
        )
    }
}
