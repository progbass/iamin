//
import React from 'react';



/*------------------------------------------------
	RATING COMPONENT
------------------------------------------------*/
class RatingComponent extends React.Component {
  constructor(props) {
    super(props);

    // Methods
    this.onScroll = this.onScroll.bind(this);
    this.onTick = this.onTick.bind(this);
   
   	// Properties
    this.initValue = parseFloat(0.000);
    this.lastStar = null;

    // States
    this.state = {
    	rating: this.props.rating,
    	interval: 0, 
    	value: 0,
    	decimals: 0
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll, false);
  	clearInterval(this.state.interval);
  }


  onScroll(){
  	var pageScroll = window.pageYOffset || document.documentElement.scrollTop;
    var rating_list = this.ratingList.getBoundingClientRect();

    let pageTop = rating_list.top;
    let pageBottom = pageTop + window.innerHeight;

    if(rating_list.top < (window.innerHeight - rating_list.height) - 20){
    	window.removeEventListener('scroll', this.onScroll, false);
    	this.initAnimation();
    }
  }

  initAnimation(){
  	// Init Animation Interval
    var interval = setInterval(this.onTick, 45);
    this.setState({ interval: interval });
  }


  onTick(){
  	// Increment Value
  	this.initValue = this.initValue + .111 ;

  	// Eval Limits
  	if(this.initValue > parseFloat(this.state.rating).toFixed(3) ){
  		// Clear interval
  		clearInterval(this.state.interval);
  		// Limit Values
  		this.initValue = parseFloat(this.state.rating).toFixed(3);
  	}

  	// Format value to string
  	let round = parseFloat(this.initValue).toFixed(3).toString().substr(0, 3);
  	let decimals = parseFloat(this.initValue).toFixed(3).toString().substr(-2);

  	// Update State
  	this.setState({ value: round, decimals: decimals });

  	// Animate Stars
  	this.animateStars()
  }

  animateStars(){
  	// Get 'star' index
  	var starNumber = parseInt(this.initValue);
  	var currentStar = this.ratingList.childNodes[starNumber];

  	// Show Star
  	if(starNumber != this.lastStar){
  		currentStar.style.transform = 'scale(1)';
  	}

  	// Animate progress bar
  	currentStar.childNodes[0].style.left = String( -100 + (100 * (this.initValue - starNumber)))+"%";

  	// Save a reference to current Star
  	this.lastStar = starNumber;
  }

  render() {
    return (
    	<div>
    		<div className="rating">{this.state.value}<span>{this.state.decimals}</span></div>
			<div className="stars">
				<ul ref={(element) => { this.ratingList = element; }}>
					<li><span></span></li>
					<li><span></span></li>
					<li><span></span></li>
					<li><span></span></li>
					<li><span></span></li>
				</ul>
			</div>
    	</div>
    );
  }
}

RatingComponent.propTypes = {
  rating: React.PropTypes.number.isRequired
}




/*------------------------------------------------
	ABOUT COMPONENT
------------------------------------------------*/
const About = React.createClass({
  render: function(){
    return(
    	<section id="about">
    		<div className="wrap_center">
    			<div className="index_holder">
    				<span>00</span>
    				<h4 className="index">Bienvenid@</h4>
    			</div>

    			<div className="info_holder">
    				<div className="perfil">
    					<h1>Hola! soy Ingrid_</h1>
    					<p>Creativo publicitario, predicadora de historias, apasionada de la estética, redactora entusiasta, groupie de coders, trotamundos y yoguini sin doctrina.</p>
    					<p>Nací en los 80’s entre arte ecléctico, spray y sintetizadores, formo parte de una generación analógica-digital que se cree millenial pero godinea.</p>
    					<p>En mis ocho años de carrera profesional, mi experiencia se ha adaptado a las distintas tendencias emergentes, desarrollando las habilidades multidisciplinarias, que me han permitido participar activamente desde la concepción y planeación estratégica de una idea, hasta su producción e implementación.</p>
    				</div>

    				<div className="photo">
    					<img src={require("../images/ingrid_ocana.png")} alt="Ingrid Ocana Photo" />
    		
    					<div>
    						<h2>Ingrid</h2>
    						<RatingComponent rating={4.343} />
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    )
  }
});

export default About;