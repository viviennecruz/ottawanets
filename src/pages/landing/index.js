import React, { Component } from 'react';
import Layout from "../../components/layout/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./landing";

class LandingPage extends Component {
    render(){
        return(
          <Layout>
            <Landing />
          </Layout>
        )
    }
}

export default LandingPage