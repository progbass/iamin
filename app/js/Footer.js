//
import React from 'react';


const Footer = React.createClass({
	render(){
		return(
			<footer>
				<div className="wrap_center">
					<div className="index_holder">
						<span>03</span>
						<h4 className="index">Contacto</h4>
					</div>

					<div className="info_holder">
						<p>Escr&iacute;beme si quieres saber m&aacute;s de mi trabajo
		o s&iacute;gueme en mis redes sociales.</p>

						<ul className="social_list">
							<li>
								<a href="mailto:ingrid.ocana@gmail.com" className="mail">
									Mail
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 33.667" >
										<g>
											<path fill="none" strokeWidth="3" strokeMiterlimit="10" d="
												M41.833,23.738c0,4.103-3.326,7.429-7.429,7.429H10.262c-4.103,0-7.429-3.326-7.429-7.429V9.595c0-4.103,3.326-7.429,7.429-7.429
												h24.143c4.103,0,7.429,3.326,7.429,7.429V23.738z"/>
											<path fill="none" strokeWidth="3" strokeMiterlimit="10" d="
												M5.155,5.417c0,0,15.07,14.532,15.786,15.089c1.044,0.812,2.321,0.929,3.598-0.231C25.632,19.28,39.28,5.417,39.28,5.417"/>
										</g>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/ingridocana/" className="linkedin">
									LinkedIn
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 45" >
										<g>
											<path d="M38.325,37.237c-2.442,0-4.825,0-7.255,0
				c0-0.136,0-0.293,0-0.45c0-4.137,0.009-8.272-0.009-12.411c-0.002-0.6-0.055-1.209-0.166-1.8c-0.301-1.577-1.167-2.46-2.813-2.647
				c-1.025-0.117-2.097-0.065-3.12,0.088c-1.26,0.189-1.909,1.06-2.093,2.513c-0.062,0.492-0.097,0.99-0.097,1.485
				c-0.007,4.218-0.003,8.435-0.003,12.651c0,0.159,0,0.318,0,0.549c-2.489,0-4.952,0-7.442,0c0-8.089,0-16.222,0-24.426
				c2.351,0,4.703,0,7.102,0c0,1.24,0,2.522,0,3.891c0.555-0.482,1.032-0.92,1.535-1.328c3.111-2.527,6.597-2.89,10.269-1.575
				c2.513,0.901,3.741,2.888,4.018,5.49c0.062,0.572,0.07,1.153,0.071,1.73c0.006,5.224,0.004,10.449,0.004,15.673
				C38.325,36.829,38.325,36.988,38.325,37.237z"/>

											<path d="M9.009,12.779c0,8.106,0,16.24,0,24.443
				c-2.474,0-4.937,0-7.423,0c0-8.106,0-16.24,0-24.443C4.059,12.779,6.522,12.779,9.009,12.779z"/>

											<path d="M5.379,1c2.272,0,4.097,1.828,4.089,4.096
				C9.46,7.353,7.61,9.183,5.349,9.167C3.104,9.152,1.288,7.332,1.273,5.085C1.261,2.834,3.105,1,5.379,1z"/>
										</g>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://www.behance.net/monocromatik" className="behance">
									Behance
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 39" >
										<g>
											<path d="M53.181,3.629c-4.748,0-9.387,0-14.029,0c0,1.164,0,2.252,0,3.383c4.699,0,9.338,0,14.029,0
				C53.181,5.863,53.181,4.777,53.181,3.629z"/>

											<path d="M2.251,2.01c5.404,0.02,10.807-0.035,16.207,0.096
				c1.961,0.049,3.994,0.277,5.846,0.877c4.957,1.611,7.27,7.816,4.637,12.334c-0.707,1.211-1.936,2.115-2.941,3.182
				c1.67,0.742,3.211,1.875,4.078,3.727c2.752,5.873-0.551,13.656-7.672,14.605c-2.033,0.271-4.1,0.369-6.152,0.4
				c-4.666,0.072-9.334,0.055-14.002,0.074C2.251,25.539,2.251,13.773,2.251,2.01z M10.423,30.908c3.266,0,6.457,0.143,9.629-0.049
				c2.189-0.135,3.465-1.961,3.58-4.451c0.104-2.258-0.926-3.766-3.111-4.291c-1.057-0.254-2.176-0.312-3.27-0.336
				c-2.262-0.049-4.523-0.016-6.828-0.016C10.423,24.936,10.423,27.941,10.423,30.908z M10.431,15.928
				c2.287,0,4.484,0.002,6.682-0.004c0.625,0,1.262,0.041,1.869-0.064c0.717-0.123,1.443-0.307,2.104-0.604
				c1.369-0.617,2.006-1.994,1.812-3.676c-0.207-1.785-0.9-2.787-2.566-2.949c-3.266-0.318-6.555-0.424-9.9-0.621
				C10.431,10.793,10.431,13.277,10.431,15.928z"/>

											<path d="M58.724,25.393c-6.061,0-12.119,0-18.17,0
				c-0.297,2.945,1.539,5.521,4.438,6.066c2.52,0.473,4.857,0.17,6.404-2.262c0.121-0.191,0.379-0.418,0.576-0.42
				c2.082-0.031,4.164-0.02,6.531-0.02c-0.416,0.996-0.648,1.848-1.092,2.57c-2.564,4.188-6.492,5.738-11.219,5.635
				c-2.66-0.057-5.107-0.791-7.383-2.223c-2.596-1.635-4.047-3.969-4.641-6.916c-0.586-2.887-0.57-5.777,0.125-8.633
				c1.316-5.41,5.604-8.67,11.543-8.871c6.65-0.223,11.229,3.277,12.566,9.609c0.121,0.568,0.213,1.143,0.32,1.713
				C58.724,22.893,58.724,24.141,58.724,25.393z M40.675,20.955c3.773,0,7.455,0,11.145,0c-0.268-3.299-2.469-5.295-5.689-5.238
				C43.038,15.773,40.87,17.832,40.675,20.955z"/>

											<path d="M53.181,3.629c0,1.148,0,2.234,0,3.383
				c-4.691,0-9.33,0-14.029,0c0-1.131,0-2.219,0-3.383C43.794,3.629,48.433,3.629,53.181,3.629z"/>
										</g>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/monocromatik/" className="instagram">
									Instagram
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" >
										<g>
											<path d="M1.843,39.287c0-6.184,0-12.367,0-18.55c0.03-0.176,0.084-0.352,0.09-0.528
				c0.063-2.176,0.162-4.349,0.695-6.475c1.204-4.796,3.984-8.285,8.559-10.263c2.479-1.072,5.115-1.384,7.787-1.493
				c0.585-0.023,1.17-0.083,1.755-0.127c6.182,0,12.366,0,18.55,0c0.176,0.03,0.352,0.075,0.528,0.091
				c1.795,0.156,3.619,0.157,5.381,0.487c6.437,1.205,10.564,4.972,12.2,11.366c0.708,2.766,0.714,5.606,0.741,8.428
				c0.05,5.529,0.037,11.056-0.043,16.583c-0.029,2.15-0.124,4.332-0.515,6.439c-1.193,6.412-4.978,10.521-11.347,12.15
				c-2.749,0.703-5.57,0.719-8.373,0.738c-5.861,0.041-11.725-0.02-17.587-0.061c-2.216-0.016-4.428-0.148-6.588-0.697
				c-4.705-1.195-8.159-3.918-10.147-8.393c-1.122-2.525-1.45-5.215-1.561-7.941C1.945,40.457,1.885,39.871,1.843,39.287z
				 M53.129,30.014c-0.029,0-0.059,0-0.087-0.002c0-2.346,0.046-4.691-0.014-7.036c-0.056-2.21-0.138-4.429-0.362-6.626
				c-0.217-2.123-0.967-4.076-2.411-5.72c-1.984-2.263-4.591-3.215-7.472-3.392c-3.322-0.202-6.654-0.251-9.985-0.292
				c-3.276-0.039-6.555-0.026-9.829,0.04c-2.213,0.045-4.43,0.138-6.627,0.363c-2.123,0.216-4.074,0.968-5.721,2.409
				c-2.261,1.985-3.213,4.592-3.389,7.473c-0.203,3.322-0.252,6.656-0.293,9.985c-0.04,3.275-0.026,6.555,0.04,9.83
				c0.044,2.211,0.137,4.43,0.361,6.629c0.218,2.121,0.968,4.074,2.411,5.717c1.986,2.264,4.592,3.215,7.473,3.391
				c3.322,0.203,6.656,0.252,9.986,0.293c3.275,0.041,6.555,0.041,9.829-0.043c2.433-0.064,4.889-0.109,7.284-0.484
				c4.094-0.643,6.867-3.012,7.969-7.076c0.361-1.334,0.546-2.744,0.596-4.127C53.029,37.57,53.057,33.791,53.129,30.014z"/>

										<path d="M48.424,15.008c0.006-1.892-1.498-3.413-3.384-3.417
				c-1.88-0.004-3.414,1.526-3.41,3.397c0.004,1.85,1.517,3.377,3.362,3.394C46.873,18.4,48.416,16.883,48.424,15.008z"/>

										<path d="M44.475,30.004C44.478,38.018,38,44.49,29.982,44.484
				C22,44.479,15.529,38.002,15.53,30.02c0.003-8.018,6.477-14.487,14.493-14.481C38.01,15.547,44.474,22.017,44.475,30.004z
				 M20.635,30.004c0,5.125,4.194,9.371,9.262,9.375c5.223,0.008,9.471-4.154,9.475-9.275c0.005-5.239-4.164-9.459-9.346-9.459
				C24.843,20.643,20.635,24.837,20.635,30.004z"/>

										<path d="M48.424,15.008c-0.008,1.875-1.551,3.392-3.432,3.374
				c-1.846-0.017-3.358-1.544-3.362-3.394c-0.004-1.871,1.53-3.401,3.41-3.397C46.926,11.595,48.43,13.117,48.424,15.008z"/>
										</g>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="logo_holder"><img src={require("../images/logo_black.svg")} alt="I Am In Logo. Ingrid Ocana." /></div>
			
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
					<linearGradient id="social_icon_background" gradientUnits="userSpaceOnUse" x1="4.1138" y1="13.4839" x2="40.3491" y2="13.4839">
						<stop offset="0" stopColor='#7466AE' />
						<stop offset="1" stopColor='#6084C3' />
					</linearGradient>
				</svg>

			</footer>
		)
	}
});


export default Footer;