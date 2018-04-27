import React,{ Component } from 'react';

//Material UI component
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class Header  extends Component{
	constructor(props){
		super(props)
		this.state={sidebarOpen:false}
	}
	render(){
		return(
				<div>
					<AppBar 
							title="Sagarmatha" 
							onLeftIconButtonClick = {() => this.toggleSidebar()}
					/>
					<Drawer 
						open={this.state.sidebarOpen}
						docked={false}
						onRequestChange = {() => this.toggleSidebar()}
						>	
						<MenuItem>First</MenuItem>
						<MenuItem>Second</MenuItem>
					</Drawer>
				</div>
			)
	}

	toggleSidebar(){
		this.setState({sidebarOpen:!this.state.sidebarOpen})
	}
}

export default Header;