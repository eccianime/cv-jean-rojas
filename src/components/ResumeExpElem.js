import React from 'react';

export default class ResumeExpElem extends React.Component{
	render(){
		return(
			<div className="resume-item">
				<div className="name">{this.props.job}</div>
				<div className="date">{this.props.date}<span>|</span> {this.props.comp}</div>
				<p>{this.props.desc}</p>
			</div>
		)
	}
}