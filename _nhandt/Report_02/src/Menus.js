import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const menus = [
	{
		name : 'Home page',
		to : '/',
		exact : true
	},
	{
		name : 'Table page',
		to : '/table',
		exact : false
	}
];

class Menu extends Component {
	render(){
		return (
		    <div>
		    	<nav className="navbar navbar-inverse">
	        		<ul className="nav navbar-nav">
	        			{ this.showMenus(menus) }
	        		</ul>
		        </nav>
		    </div>
  		)
	}

	showMenus = (menus) => {
		var result = null;
		if(menus.length>0){
			result = menus.map((menu, index) => {
				return (
					<li key={ index }><NavLink to={ menu.to }>
										{ menu.name }
									  </NavLink>
					</li>
				)
			});
		}
		return result;
	}

};

export default Menu;
