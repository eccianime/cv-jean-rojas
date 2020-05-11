import React from 'react';
import CardBase from './CardBase';

export default class HomeCard extends React.Component{
	render(){
		const lang = this.props.lang.home;
		return(
			<CardBase id={this.props.id} activeCard={this.props.activeCard}>
				<div className="slide"></div>
				<div className="centrize full-width">
					<div className="vertical-center">

						<div className="title"><span>Jean Paul</span> Rojas Véliz</div>
						<div className="subtitle">
							{lang.greet}
							{/*<div className="typing-title">
								<p> <strong>{lang.dw}.</strong></p>
								<p> <strong>{lang.fl}.</strong></p>
								<p> <strong>{lang.dm}.</strong></p>
								<p> <strong>{lang.dg}.</strong></p>
							</div>*/}
							<span className="typed-title"></span>
							<span className="typed-title"> <strong>{lang.dw}</strong></span>
							<span className="typed-cursor">|</span>

						</div>
						
					</div>
				</div>
			</CardBase>
		)
	}
}