//
import React from 'react';


const Tester = React.createClass({
	render: function() {
		console.log(this.props)
	    return <h1>Hello World to</h1>;
	  },


	getInitialState: function() {
		return null;
	},  
	componentDidMount: function() {},
	componentWillUnmount: function() {},
	  
	onStart: function() {},
	onStop: function() {},
	onReset: function() {},
	  
});


export default Tester;