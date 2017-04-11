//
const path = require("path");
import React from 'react';
import Scroll from 'react-scroll';
import TransitionGroup from 'react-addons-transition-group';
import axios from 'axios';
import fetch from 'node-fetch';


/////////
var scroll = Scroll.animateScroll;
var scroll_events = Scroll.Events;



/*------------------------------------------------
	WORK DETAIL COMPONENT
------------------------------------------------*/
class WorkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.closeWindow = this.closeWindow.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillEnter = this.componentWillEnter.bind(this);
    this.componentWillLeave = this.componentWillLeave.bind(this);
    this.state = {class: '', projectData: this.props.projectData};
  }

  componentDidMount(){}
  componentWillUnmount(){}


  componentWillEnter (callback) {
    //const el = this.refs.article;
    var scope = this;
    setTimeout(function(){
    	scope.setState({class: 'active'})
    	setTimeout(callback, 500)
    }, 150);
  }
  componentWillLeave (callback) {
    var scope = this;
    setTimeout(function(){
    	scope.setState({class: ''})
    	setTimeout(callback, 900)
    }, 50);
  }

  closeWindow(_e){
  	_e.preventDefault();
  	this.props.closeHandler(_e);
  }

  render() {
    return (
        <article ref={'article'} className={this.state.class}>
        	<a className="close_btn" onClick={this.closeWindow}></a>
        	<div className="content_holder">
			    <div className="wrap_center">
				    <div className="index_holder">
						<span>{this.state.projectData.date}</span>
						<h4 className="index">Trabajos</h4>
					</div>

					<div className="info">
						<h2>{this.state.projectData.name}</h2>
						<h3>{this.state.projectData.client}</h3>

						<div className="content">
							<p>{this.state.projectData.content}</p>
						</div>
					</div>

					<div className="gallery">
						<img src={require("../images/book/gallery/"+this.state.projectData.photo)} alt="{this.state.projectData.name}" />
					</div>
			    </div>
			</div>
		</article>
    );
  }
}

WorkDetail.propTypes = {
  //percent: React.PropTypes.number.isRequired
}




/*------------------------------------------------
	WORK COMPONENT
------------------------------------------------*/
var Work = React.createClass({
	getInitialState: function() {
		return {
		  showDetail: false,
		  currentProject: 0,
		  projects: []
		}
	},

	componentDidMount: function(){
		var scope = this;

		// Load Projects List
		const url = `${window.location.href}projects.json`;
		console.log(__dirname, path.resolve(__dirname, 'projects.json')) 
		axios.get('./projects.json').then(function(_response){
			return _response.data;
		}).then( function(_projectsList){
			scope.setState({ projects: _projectsList.projects });
		}).catch(function(_error){
			console.log(_error);
		});
	},

	showDetails: function(_id){
		var scope = this;
		var pageScroll = window.pageYOffset || document.documentElement.scrollTop;
		var work_list = this.workSection.getElementsByTagName('ul')[0].getBoundingClientRect();
	  	scroll_events.scrollEvent.register('end', function(to, element) {
			scope.setState({
				showDetail: true,
				currentProject: _id
			});
		});
	  	scroll.scrollTo(pageScroll + work_list.top, {duration: 700});
	},
	hideDetails: function(){
		this.setState({showDetail: false})
	},

  	render: function(){
	  	return(
			<section id="work" ref={(input) => { this.workSection = input; }}>
				<div className="wrap_center">
					<div className="index_holder">
						<span>02</span>
						<h4 className="index">Trabajos</h4>
					</div>
				</div>

				<TransitionGroup component="div">
				{ this.state.showDetail ? <WorkDetail projectData={this.state.projects[this.state.currentProject]} closeHandler={this.hideDetails} /> : null }
				</TransitionGroup>

				<div className="info_holder">
					{ this.state.projects.length <= 0 ? "Cargando Proyectos..." : null }

					<ul>
						{this.state.projects.map(function(skill, index) {
							var scope = index;
		        			return (
								<li key={index} >
									<div className="photo"><a onClick={() => this.showDetails(index)}><img src={require("../images/book/"+skill.thumb)} alt={index} /></a></div>
									<div className="title">
										<a onClick={() => this.showDetails(index)}><span className="name">{skill.name}</span> <span className="icon"></span></a>
									</div>
								</li>
		        			);
		      			}.bind(this))}
					</ul>
				</div>
			</section>
		)
	}
});


export default Work;