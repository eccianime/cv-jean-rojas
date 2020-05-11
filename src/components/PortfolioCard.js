import React from 'react';
import CardBase from './CardBase';

import sm01 from '../images/works/01-small.png';
import lg01 from '../images/works/01.png';
import sm02 from '../images/works/02-small.png';
import lg02 from '../images/works/02.png';
import sm03 from '../images/works/03-small.png';
import lg03 from '../images/works/03.png';
import sm04 from '../images/works/04-small.png';
import lg04 from '../images/works/04.png';
import sm05 from '../images/works/05-small.png';
import lg05 from '../images/works/05.png';
import sm06 from '../images/works/06-small.png';
import lg06 from '../images/works/06.png';
import sm07 from '../images/works/07-small.png';
import lg07 from '../images/works/07.png';

export default class PortfolioCard extends React.Component{
	render(){
		const lang   = this.props.lang.portfolio,
				cont = lang.cont,
				imgsm = [ sm01 , sm02 , sm03 , sm04 , sm05 , sm06 , sm07 ],
				imglg = [ lg01 , lg02 , lg03 , lg04 , lg05 , lg06 , lg07 ];;

		const compPortfolio = cont.map( (i,p) =>
			<div key={"port-folio-"+p} className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item">
				<div className="box-item card-box">
					<div className="image">
						<a href="#" className="has-popup-image" onClick={()=>this.props.showHideModal( imglg[p] )} ><img src={imgsm[p]} alt="" /><span className="info"><span className="icon la la-eye"></span></span></a>
					</div>
					<div className="desc">
						<a href="#" className="name has-popup-image">{i.tit}</a><div className="category">{i.dsc}</div>
					</div>
				</div>
			</div>
		);

		return(
			<CardBase id={this.props.id} activeCard={this.props.activeCard}>
				<div className="row card-container">
					<div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6" data-simplebar>
						<div className="simplebar-scroll-content">
							<div className="simplebar-content">
								<div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"></div>
								<div className="content inner-top"><div className="row">
										<div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
											<div className="title-bg">{ lang.tit }</div>
										</div>
									</div>
								</div>

								<div className="content works">
									<div className="row">
										<div className="col col-m-12 col-t-5 col-d-5 col-d-lg-5">
											<div className="title">{ lang.por }</div>
										</div>
									</div>

									<div className="row grid-items">{compPortfolio}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardBase>
		)
	}
}