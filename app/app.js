//libs
import React, {Component} from 'react';
import ReactDom  from 'react-dom';
import Scroll from 'react-scroll';

//modules
import Header from './js/Header';
import About from './js/About';
import Skills from './js/Skills';
import Work from './js/Work';
import Footer from './js/Footer';


/////////
var scroll = Scroll.animateScroll;
var scroll_events = Scroll.Events;

/*------------------------------------------------
	WORK DETAIL COMPONENT
------------------------------------------------*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.navigate = this.navigate.bind(this);
    this.state = {class: '', projectData: this.props.projectData};
  }

  navigate(){
		var scope = this;
		var pageScroll = window.pageYOffset || document.documentElement.scrollTop;
		var target_section;
		
		switch(window.location.hash){
			case "#/about":
				target_section = document.getElementById('about');
				break;
			case "#/skills":
				target_section = document.getElementById('skills');
				break;
			case "#/work":
				target_section = document.getElementById('work');
				break;
			case "#/contact":
				target_section = document.getElementsByTagName('footer')[0];
				break;
			default:
				target_section = document.getElementsByTagName('header')[0];
		}

	  	/*scroll_events.scrollEvent.register('end', function(to, element) {
			scope.setState({
				showDetail: true,
				currentProject: _id
			});
		});*/
	  	scroll.scrollTo(target_section.offsetTop, {duration: 700});
  }

  componentDidMount(){
  	window.addEventListener('hashchange', this.navigate, false);
  	this.navigate()
  }
  componentWillUnmount(){}

  render(){
	return(
		<div>
			<Header />
			<About />
			<Skills />
			<Work />
			<Footer />
		</div>
	)
  }
}
export default App;

ReactDom.render((
	<App />
), document.getElementById('main_container'));


