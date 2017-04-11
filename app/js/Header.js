//
import React from 'react';


//css
import '../css/styles.scss';

const Header = React.createClass({

  render: function(){
    return(
    	<header>
        <ul style={{display: 'none'}}>
          <li><a href="/">Home</a></li>
          <li><a href="/#/test">About</a></li>
        </ul>
    		<div className="logo_holder"><img src={require("../images/logo.svg")} alt="I Am In Logo. Ingrid Ocana." /></div>
    	</header>
  )}
});

export default Header;