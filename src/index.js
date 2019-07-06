import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
import App from './components/App';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

Amplify.configure(awsconfig);

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1565c0',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: '#FF0000',
      },
      background: {
        default: '#FFFFFF',
      },
    },
  });

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  , document.getElementById('root'));
