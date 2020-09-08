import React, { Component } from 'react'

export default class Sell extends Component {
    render() {
        return (
            <section>
                <h1>Sell</h1>
                <form>
                    <input type="text"  placeholder=" Shoe Brand "/>
                    <input type="number"  placeholder=" $ Shoe Price "/>
                    <input type="email" placeholder="sell@gmail.com" />
                    <input className="btn" type="submit" value="Post listing"/>
                </form>
            </section>
        )
    }
}
