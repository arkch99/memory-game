import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const theme = createTheme({	
	typography:{
		h1:{
			fontSize: '55px'
		},
		h2:{
			fontSize: '25px',
		},
    palette:{
      mode:'dark'
    },
	},	
  palette:{
    type: "dark"
  }
});

ReactDOM.render(  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);