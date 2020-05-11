import React from 'react';

export default class HeaderMenuButton extends React.Component{
	render(){
		return(
			<li className={this.props.activeMenu === this.props.icon ? "active" : ""} onClick={this.props.changeActive}>
				<a href="#">
					<span className={"icon la " + this.props.icon} data-card={this.props.card}></span>
					<span className="link">{this.props.text}</span>
				</a>
			</li>
		)
	}
}