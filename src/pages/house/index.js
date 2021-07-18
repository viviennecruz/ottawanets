import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/layout";

import House from "./house";

class HousePage extends Component {
    render(){
        return(
          <Layout>
            <House />
          </Layout>
        )
    }
}

export default HousePage;