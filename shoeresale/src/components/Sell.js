import React, { Component } from 'react'

export default class Sell extends Component {
    render() {
        return (
            <section>
                <h1>Sell</h1>
                <form>
                    <input type="text" id="brand"  placeholder=" Shoe Brand "/>
                    <input type="number"  id="price" placeholder=" $ Shoe Price "/>
                    <input type="email" id="mail" placeholder="sell@gmail.com" />
                    <input className="btn" type="submit" value="Post listing"/>
                </form>
            </section>
        )
    }
}
