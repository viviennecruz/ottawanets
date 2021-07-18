import React, { Component, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/layout";

import Training from "./training";

class TrainingPage extends Component {
    render(){
        return(
          <Suspense fallback="loading">
            <Layout>
              <Training />
            </Layout>
          </Suspense>
          
        )
    }
}

export default TrainingPage;