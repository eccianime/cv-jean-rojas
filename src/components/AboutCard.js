import React from 'react';
import CardBase from './CardBase';
import AboutServElem from './AboutServElem';

export default class AboutCard extends React.Component{
	render(){
		const 	lang 	= this.props.lang.about,
				serv 	= lang.serv,
				icon 	= [ 'la-html5', 'la-server', 'la-android', 'la-photo', 'la-bar-chart-o', 'la-wechat' ];
	
		const servComp = serv.map( (i, p) =>
			<AboutServElem 
				key={"elemServ"+p} 
				ico={icon[p]}
				tit={i.tit}
				des={i.des}
			/>
		);
		return(
			<CardBase id={this.props.id} activeCard={this.props.activeCard}>
				<div className="row card-container" onMouseUp={this.soltar} onMouseMove={this.mover}>
					<div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6" data-simplebar>
						{/*<div className="simplebar-track vertical" style={{visibility: "visible"}}><div className="simplebar-scrollbar" style={{visibility: "visible", top: + this.state.scrollPos +"px", height: "30%"}} onMouseDown={this.presionar}></div></div>*/}
						<div className="simplebar-scroll-content"><div className="simplebar-content">
							<div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6 "></div>
							<div className="content inner-top">
								<div className="row">
									<div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
										<div className="title-bg">{ lang.tit }</div>
										<div className="text">{ lang.dsc }</div>
										
										<div className="circle-bts">
											<a href="#"><span><i className="icon la la-download"></i>{lang.dcv}</span></a>
											<a href="#"><span><i className="icon la la-download"></i>{lang.dpf}</span></a>
										</div>
									</div>
								</div>
							</div>

							<div className="content services">
								<div className="row">
									<div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">{lang.hab}</div>
								</div>
								<div className="row service-items">{servComp}</div>
							</div>
						</div></div>
					</div>
					
				</div>
			</CardBase>
		)
	}
}