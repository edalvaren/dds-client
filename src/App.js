import React, { Component } from 'react';
import './App.scss';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Theme } from './utils/theme';
import { Route } from 'react-router';

/* Common Components */
import Layout from './components/common/Layout';
import Home from './components/common/Home';

import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={Theme}>
        <Layout>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
        </Layout>

        </MuiThemeProvider>
    );
  }
}

export default App;


