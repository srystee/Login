import React, {Component} from 'react';
class User extends Component{
	constructor(props){
		super(props)
		this.state={
			name:props.detail.name
		}
	}
	render(){
		return(
			<div>
				<p>{this.state.name +' from ' + this.props.detail.address +' of age ' + this.props.age}</p>
				<input type="text" value={this.state.name} onChange={(event)=>this.handleChange(event)}/>
			</div>
			)
	}
	handleChange(event){
		alert(event.target.value)
		this.setState({name:event.target.value})
	}
}

export default User;
