//
const path = require("path");
import React from 'react';
import Scroll from 'react-scroll';
import TransitionGroup from 'react-addons-transition-group';
import { DefaultPlayer as Video } from 'react-html5video';
import axios from 'axios';
import fetch from 'node-fetch';


// CSS
import 'react-html5video/dist/styles.css';


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
    this.nextSlide = this.nextSlide.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillEnter = this.componentWillEnter.bind(this);
    this.componentWillLeave = this.componentWillLeave.bind(this);
    this.state = {class: '', projectData: this.props.projectData};
    this.slider = null;
    this.currentSlide = 0;
    this.sliderDelay = 3;
  }

  componentDidMount(){
  	this.slider = document.getElementById('bookSlider');
  	this.slider.style.width = `${this.state.projectData.gallery.length * 100}%`;

  	let slides = [].slice.call(this.slider.getElementsByTagName('li'));
  	for(let slide of slides){
  		slide.style.width = `${100 / this.state.projectData.gallery.length}%`;
  	}

  	// Init auto play
  	this.sliderInterval = setInterval(this.nextSlide, this.sliderDelay * 1000);
  }
  componentWillUnmount(){
  	clearInterval(this.sliderInterval);
  }


  nextSlide(){
  	this.currentSlide++;
  	if(this.currentSlide >= this.state.projectData.gallery.length){
  		this.currentSlide = 0;
  	}

  	//const slide_width = parseInt(this.slider.getElementsByTagName('li')[0].style.width, 10);
  	//console.log(this.currentSlide * slide_width)
  	this.slider.style.left = `-${this.currentSlide * 100}%`;
  }


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
						<div className="svgHolder">
							<svg id="bookLaptop" viewBox="0 0 1097.897 599.97">
								{ /* BACKGROUND */ }
								<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="131.2314" y1="41.0728" x2="970.5267" y2="525.6401">
									<stop  offset="0" style={{stopColor: '#5D85DE'}}/>
									<stop  offset="0.2578" style={{stopColor: '#739EEA'}}/>
									<stop  offset="0.7121" style={{stopColor: '#DC67F4'}}/>
									<stop  offset="0.9998" style={{stopColor: '#DB31F6'}}/>
								</linearGradient>
								<path fill="url(#SVGID_1_)" d="M140.003,36.729c0,0-3.509-28.834,28.492-28.834s764.674-1.664,766.338,0s24,0.334,24,36.999
									s0,501.001,0,501.001h-818L140.003,36.729z"/>

								{ /* BASE / KEYBOARD */ }							
								<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="4" y1="559.811" x2="1094.8335" y2="559.811">
									<stop  offset="0" style={{stopColor: '#739EEA'}}/>
									<stop  offset="1" style={{stopColor: '#DC67F4'}}/>
								</linearGradient>
								<path fill="url(#SVGID_2_)" d="M4,543.728l0.414,30.251c0,0,1.414,1.916,15.414,1.916s1064.006,0,1064.006,0l11-2.671v-28.329
									L4,543.728z"/>


								{ /* BOTTOM */ }
								<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="4.4136" y1="583.3716" x2="1094.8335" y2="583.3716">
									<stop  offset="0" style={{stopColor: '#4979CE'}}/>
									<stop  offset="1" style={{stopColor: '#C124E2'}}/>
								</linearGradient>
								<path fill="url(#SVGID_3_)" d="M4.414,573.979c0,0,12.748,18.578,76.748,19.244s962,0,962,0s42.011-9.332,51.672-19.999
									C1069.162,573.224,4.414,573.979,4.414,573.979z"/>


								{ /* SHINE SCREEN */ }
								<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="67.4546" y1="133.5352" x2="346.1948" y2="298.6142">
									<stop  offset="0" style={{stopColor: '#FFFFFF', stopOpacity: 0.4}}/>
									<stop  offset="1" style={{stopColor: '#FFFFFF', stopOpacity: 0}}/>
								</linearGradient>
								<path fill="url(#SVGID_4_)" d="M147.833,537.895c0,0,0-490.22,0-499.722c0-9.501,4.386-24.278,24.618-24.278
									c20.231,0,295.382,0,295.382,0L147.833,537.895z"/>


								{ /* SHINE BASE */ }
								<linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="61.3228" y1="426.8599" x2="552.6227" y2="717.8237">
									<stop  offset="0" style={{stopColor: '#FFFFFF', stopOpacity: 0.4}} />
									<stop  offset="1" style={{stopColor: '#FFFFFF', stopOpacity: 0}} />
								</linearGradient>
								<polygon opacity="0.6" fill="url(#SVGID_5_)" points="9.833,566.977 9.833,550.478 557.156,549.895 "/>


								{ /* BASE LOCK */ }
								<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="511.4956" y1="536.1899" x2="597.6786" y2="587.2303">
									<stop  offset="0" style={{stopColor: '#6764D3'}} />
									<stop  offset="1" style={{stopColor: '#A03BDD'}} />
								</linearGradient>
								<path opacity="0.7" fill="url(#SVGID_6_)" d="M596.833,558.895c0,3.313-2.686,6-6,6h-82c-3.313,0-6-2.687-6-6l0,0
									c0-3.313,2.686-6,6-6h82C594.148,552.895,596.833,555.582,596.833,558.895L596.833,558.895z"/>


								{ /* WEBCAM */ }
								<linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="545.2964" y1="19.8198" x2="558.8693" y2="27.8581">
									<stop  offset="0" style={{stopColor: '#6764D3'}} />
									<stop  offset="1" style={{stopColor: '#A03BDD'}} />
								</linearGradient>
								<path opacity="0.5" fill="url(#SVGID_7_)" d="M557.833,23.395c0,3.59-2.91,6.5-6.5,6.5l0,0c-3.59,0-6.5-2.91-6.5-6.5l0,0
									c0-3.59,2.91-6.5,6.5-6.5l0,0C554.923,16.895,557.833,19.805,557.833,23.395L557.833,23.395z"/>


								{ /* SCREEN */ }
								<linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="550.8335" y1="547.4692" x2="550.8335" y2="438.2767">
									<stop  offset="0" style={{stopColor: '#6764D3', stopOpacity: 0.5}} />
									<stop  offset="0.8836" style={{stopColor: '#7957D6', stopOpacity: 0}} />
								</linearGradient>
								<rect x="142.833" y="453.895" fill="url(#SVGID_8_)" width="816" height="90"/>
							</svg>
						</div>

						<div className="slider_holder">
							<ul id="bookSlider">
								{this.state.projectData.gallery.map(function(photo, index) {
				        			
				        			let element_type, gallery_item;

			        				if( (/\.(jpe?g|png|gif|svg)$/i).test(photo) ){
			        					element_type = 'image';
			        					gallery_item = <img src={require("../images/book/gallery/"+photo)} alt="{this.state.projectData.name}" />
			        				
			        				} else if( (/\.(mp4|mov|webm)$/i).test(photo) ){
			        					element_type = 'video';
			        					gallery_item = <Video autoPlay loop
			        									controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
											            poster="require('../images/book/gallery/erick.png')"
											            onCanPlayThrough={() => {}}>
											            <source src={require(`../images/book/gallery/${photo}`)} type="video/mp4" />
											        </Video>
										console.log(gallery_item)
			        				} else {
			        					return
			        				}

				        			return (
										<li key={index} datatype={element_type}>
											{gallery_item}
										</li>
				        			);
				      			}.bind(this))}
							</ul>
						</div>
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
		//console.log(__dirname, path.resolve(__dirname, 'projects.json')) 
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