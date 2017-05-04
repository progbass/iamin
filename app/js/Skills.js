//
import React from 'react';

// DATA
var skills_arr = [
  {
    name: "Conceptualización",
    score: 85,
    class: 'concept'
  },
  {
    name: "Estrategia Digital",
    score: 70,
    class: 'strategy'
  },
  {
    name: "Marketing de Contenidos",
    score: 65,
    class: 'content'
  },
  {
    name: "Presentación a Clientes",
    score: 70,
    class: 'clients'
  },
  {
    name: "Dirección de Arte",
    score: 90,
    class: 'art'
  },
  {
    name: "Redacción",
    score: 50,
    class: 'writing'
  },
  {
    name: "UX / UI",
    score: 70,
    class: 'ux'
  },
  {
    name: "Redes Sociales",
    score: 70,
    class: 'social'
  },
];





/*------------------------------------------------
  RADIAL METER COMPONENT
------------------------------------------------*/
class RadialMeter extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.animateMeter = this.animateMeter.bind(this);
    this.class = this.props.className;
    this.state = {percent: this.props.percent};
    this.animationDelay = this.props.delay || 0;
    this.delayTimeOut = 0;
    console.log(this.animationDelay)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll, false);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll, false);
    clearTimeout(this.delayTimeOut);
  }

  handleScroll(event){
    var pageScroll = window.pageYOffset || document.documentElement.scrollTop;
    var work_list = this.refs.container.getBoundingClientRect();

    let pageTop = work_list.top;
    let pageBottom = pageTop + window.innerHeight;

    if(work_list.top < (window.innerHeight - work_list.height) - 30){
      window.removeEventListener('scroll', this.handleScroll, false);
      this.delayTimeOut = setTimeout(this.animateMeter, this.animationDelay);
    }
  }


  animateMeter(){
  	var utilslider = this.state.percent;
  	var circle = this.graphic;
  	var radius = parseInt(circle.getAttribute('r'));
  	var circumference = 2 * radius * Math.PI;

  	var percentValue = (utilslider / 100) * circumference;
    this.graphic.style.strokeDasharray = percentValue + " " + circumference;
  }

  render() {
    return (
      <div className={'icon_holder '+this.props.className} ref={'container'}  >
		    <svg viewBox="0 0 100 100">
		        <circle  r="25" cx="50" cy="50" ref={(input) => { this.graphic = input; }} />
		    </svg>
		    <div className="icon"></div>
		  </div>
    );
  }
}
RadialMeter.propTypes = {
  percent: React.PropTypes.number.isRequired,
  delay: React.PropTypes.number
}




/*------------------------------------------------
  SKILLS COMPONENT
------------------------------------------------*/
var Skills = React.createClass({
  propTypes: {
    /*skills: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      class: React.PropTypes.string.isRequired,
    })).isRequired*/
  },
  
  getInitialState: function() {
    return {
      skills: skills_arr
    };
  },

  componentDidMount: function(){},
  componentWillUnmount: function(){},


	render: function() {
	    return (
			<section id="skills">
				<div className="wrap_center">
					<div className="index_holder">
						<span>01</span>
						<h4 className="index">Experiencia</h4>
					</div>

					<div className="info_holder">
						<ul>
							{this.state.skills.map(function(skill, index) {
            		return (
									<li key={index} >
										<RadialMeter percent={skill.score} className={skill.class} />
										<h3>{skill.name}</h3>
									</li>
            		);
          		}.bind(this))}
						</ul>
					</div>
				</div>
			</section>
		)
	}
});


export default Skills;


