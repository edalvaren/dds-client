import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Theme } from './utils/theme';
import { Route } from 'react-router';
import Layout from './components/common/Layout';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={Theme}>
        <Layout>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </Layout>
        </MuiThemeProvider>
    );
  }
}

export default App;


