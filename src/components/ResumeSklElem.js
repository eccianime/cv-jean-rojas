import React from 'react';
import ResumeItem from './ResumeItem';

export default class ResumeSklElem extends React.Component{
	render(){
		const items = this.props.info.hab.map( (i,p) =>
			<ResumeItem 
				key={"resumeItem"+p}
				tit={i.tit}
				por={i.por}
			/>
		);

		return(
			<div className="col col-m-6 col-t-6 col-d-6 col-d-lg-6">{this.props.info.tit}
				<div className="skills-list card-box"><ul>{items}</ul></div>
			</div>
		)
	}
}