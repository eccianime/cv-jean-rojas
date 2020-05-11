import React from 'react';

export default class CardBase extends React.Component{
	render(){
		const started = this.props.id === 'home-card' ? " card-started " : "";
		const isActive = this.props.id === this.props.activeCard ? " active" : "";
		return(
			<div className={"card-inner " + started + isActive } id={this.props.id}>
				{ this.props.children }
			</div>
		)
	}
}