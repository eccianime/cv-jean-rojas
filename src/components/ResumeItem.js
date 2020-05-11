import React from 'react';

export default class ResumeItem extends React.Component{
	render(){
		return(
			<li> 
				<div className="name">{this.props.tit}</div>
				<div className="progress">
					<div className="percentage" style={{width: this.props.por+"%"}}></div>
				</div>
			</li>
		)
	}
}