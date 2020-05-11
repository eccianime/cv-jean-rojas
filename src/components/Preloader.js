import React from 'react';

export default class Preloader extends React.Component{
	render(){
		const fadeOut = this.props.visible === false ? "fadeOut" : "";
		return(
			<div className={"preloader " + fadeOut}>
				<div className="centrize full-width">
					<div className="vertical-center">
						<div className="spinner">
							<div className="double-bounce1"></div>
							<div className="double-bounce2"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}