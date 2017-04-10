//
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'


//css
import '../css/styles.scss';

//
import NotFound from './NotFound';


const Header = () => (
	<Router>
		<header>
			<div className="logo_holder"><img src={require("../images/logo.svg")} alt="I Am In Logo. Ingrid Ocana." /></div>
		</header>
	</Router>
);

/*
<div>
  <ul>
    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
    <li><NavLink to="/test" activeClassName="active">About</NavLink></li>
  </ul>

  <hr/>
  <Switch>
  	<Route path="/" exact component={Header} />
  	<Route path="/test" component={About} />
  	<Route component={NotFound}/>
  </Switch>
</div>
*/


export default Header;