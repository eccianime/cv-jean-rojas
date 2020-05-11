import React from 'react';
import CardBase from './CardBase';
import ContactItem from './ContactItem';

export default class ContactCard extends React.Component{
	render(){
		const 	lang 	= this.props.lang.contact,
				cont 	= lang.inf,
				icon 	= [ 'map-marker', 'at', 'phone', 'check-square' ];

		const contComp = cont.map( (i, p) =>
			<ContactItem 
				key={"elemCont"+p} 
				ico={icon[p]}
				tit={i.tit}
				des={i.des}
			/>
		);
		return(
			<CardBase id={this.props.id} activeCard={this.props.activeCard}>
				<div className="row card-container">
					
					<div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6" data-simplebar>
						<div className="simplebar-scroll-content">
							<div className="simplebar-content">
								<div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"></div>
								<div className="content inner-top">
									<div className="row">
										<div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
											<div className="title-bg">{lang.tit}</div>
										</div>
									</div>
								</div>

						<div className="content contacts-info">
							<div className="row">
								<div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
									<div className="title">{lang.pec}</div>
								</div>
							</div>
							<div className="row contacts-items">{contComp}</div>
							<div className="row contacts-items" style={{"textAlign":"center"}}>
								<img style={{border: "3px solid white", "borderRadius":"20px"}} src="https://www.mapquestapi.com/staticmap/v5/map?center=Rua+Amintas+de+Barros+Curitiba&amp;size=500,500&amp;zoom=13&amp;key=D55slb0Kizl6iK3HMIYHZJQwATmGPbDx" alt="Map with Center" />
							</div>
						</div>
					</div></div></div>					
				</div>
			</CardBase>
		)
	}
}