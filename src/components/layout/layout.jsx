import React, { Component } from 'react';
import Header from "../nav/header/NavigationBar";
import Footer from "../nav/footer/footer";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout