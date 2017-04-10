//libs
import React, {Component} from 'react';
import ReactDom  from 'react-dom';

//modules
import Header from './js/Header';
import About from './js/About';
import Skills from './js/Skills';
import Work from './js/Work';
import Footer from './js/Footer';

ReactDom.render((
	<div>
		<Header/>
		<About/>
		<Skills/>
		<Work/>
		<Footer/>
	</div>
), document.getElementById('main_container'));


