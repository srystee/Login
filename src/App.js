import React, { Component } from 'react';
//Material UI component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Components
import Header from './Component/Header';
import Body from './Component/Body';
import Login from './Component/Login';

class App extends Component{
	render(){
		return(
			<MuiThemeProvider>
			     <Login />
			</MuiThemeProvider>
			)
	}
}
export default App;