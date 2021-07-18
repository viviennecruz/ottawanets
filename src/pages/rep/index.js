import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/layout";

import Rep from "./rep";

class RepPage extends Component {
    render(){
        return(
          <Layout>
            <Rep />
          </Layout>
        )
    }
}

export default RepPage;