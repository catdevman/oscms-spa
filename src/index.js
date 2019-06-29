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
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  , document.getElementById('root'));
