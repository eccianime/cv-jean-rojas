import React from 'react';

export default class AboutServElem extends React.Component{
	render(){
		return(
			<div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
				<div className="service-item card-box">
					<div className="icon"><i className={"la " + this.props.ico}></i></div>
					<div className="name">{this.props.tit}</div>
					<p>{ this.props.des }</p>
				</div>
			</div>
		)
	}
}