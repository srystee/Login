import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import logo from '../Asset/logo-blue.svg';
import RebrandlyApi from '../Services/rebrandlyApi';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

const style = {
  margin: 12,
};
class login extends Component {
	alignCenter = {
    height: "100vh",          
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  cardWidth = {
    width: "500px"
  }

  floatActionButtonRight = {
    float: "right"
  }
	constructor (props) {
		super(props)
		this.state= {
			email: '',
			apikey: ''
		}
	}
	 
	render () {
		return (
			<div style={this.alignCenter}>
        <Card style={this.cardWidth}>
          <CardHeader
            title="Rebrandly"
            subtitle="View on your rebrandly resource!!!"
            avatar={logo}
           
          />
          <CardTitle title="Login"/>
          <CardText>
            <TextField
              type="email"
              fullWidth={true}
              floatingLabelText="Email Address"
              value={this.state.email}
              onChange={ (e) => this.onChangeEmail(e) }
            />
            <TextField
              type="password"
              fullWidth={true}
              floatingLabelText="API Key"
              value={this.state.apikey}
              onChange={ (e) => this.onChangeApikey(e) }
            />
          </CardText>
          <CardActions style={this.floatActionButtonRight}>
            <RaisedButton label="Submit" primary={true} onClick={ () => this.onSubmit() }/>
          </CardActions>
        </Card>
      </div>
	
			)
	}
	onChangeEmail(e) {

		this.setState({email: e.target.value})
	}
	onChangeApikey(e) {
		this.setState({apikey: e.target.value})
	}
	onSubmit() {
		fetch('https://api.rebrandly.com/v1/account',
		{
			headers:{
				apikey: this.state.apikey
			}
		})
		.then(response=> {
			if(response.ok) {
				response.json()
				.then(data => {
				 console.log(data)
				if(data.email === this.state.email)
				{
					console.log("Right User")
				}
				else{
					alert("Unauthorized User")
				}
				})
			}
			else
			{
				alert(response.statusText)
			}
			
		})

		
	}
}
export default login;