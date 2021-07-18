import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/layout";

import Training from "./training";

class TrainingPage extends Component {
    render(){
        return(
          <Layout>
            <Training />
          </Layout>
        )
    }
}

export default TrainingPage;