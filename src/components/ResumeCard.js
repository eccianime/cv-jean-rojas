import React from 'react';
import CardBase from './CardBase';
import ResumeExpElem from './ResumeExpElem';
import ResumeSklElem from './ResumeSklElem';

export default class ResumeCard extends React.Component{
	render(){
		const lang 	= this.props.lang.resume,
				eae	= lang.eae.cont,
				skl	= lang.skl;

		const expComp = eae.map( (i, p) =>
			<ResumeExpElem 
				key={"elemExp"+p} 
				job={i.job}
				date={i.date}
				comp={i.comp}
				desc={i.desc}
			/>
		);

		const sklComps = skl.map( ( i , p ) => 
			<ResumeSklElem
				key={"elemSkl"+p}
				info={i}
			/>
		);

		return(
			<CardBase id={this.props.id} activeCard={this.props.activeCard}>
				<div className="row card-container">
					<div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6" data-simplebar>
						<div className="simplebar-scroll-content">
							<div className="simplebar-content">
								<div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"></div>
								<div className="content inner-top"><div className="row">
										<div className=" col col-m-12 col-t-12 col-d-12 col-d-lg-12">
											<div className="title-bg">{ lang.tit }</div>
										</div>
									</div>
								</div>

								<div className="content resume">
									<div className="row">
										<div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
											<div className="title">{ lang.exp }</div>
											<div className="resume-items card-box">{ expComp }</div>
										</div>
									</div>
								</div>

						<div className="content skills"><div className="row">{sklComps}</div></div>
					</div></div></div>
				</div>
			</CardBase>
		)
	}
}