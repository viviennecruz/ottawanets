import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../../components/layout/layout";

import Leagues from "./leagues";

class LeaguesPage extends Component {
    render(){
        return(
          <Layout>
            <Leagues />
          </Layout>
        )
    }
}

export default LeaguesPage;