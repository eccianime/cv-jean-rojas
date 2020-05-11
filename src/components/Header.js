import React from 'react';

import HeaderMenuButton from './HeaderMenuButton';

import flagVen from '../images/flag-ven.png';
import flagBra from '../images/flag-bra.png';
import flagUsa from '../images/flag-usa.png';

export default class Header extends React.Component{
	state = {
		IOmenu: "",
	}
	ioMenu = (e) =>{
		this.setState({
			IOmenu: this.state.IOmenu === "" ? " opened " : "",
		})
	}
	render(){
		const lang = this.props.lang.header;
		
		const botones = [
			{	icon: "la-home",       		text: lang.ho,    			card: "home-card",			},
			{	icon: "la-user",       		text: lang.am,  			card: "about-card",			},
			{	icon: "la-gear",       		text: lang.re, 				card: "resume-card",		},
			{	icon: "la-eye",        		text: lang.po,				card: "portfolio-card",		},
			/*{	icon: "la-newspaper-o",		text: lang.bl,      		card: "blog-card",			},*/
			{	icon: "la-envelope",   		text: lang.co,  			card: "contact-card",		},
		];

		const buttonComp = botones.map( (i) =>
			<HeaderMenuButton 
				activeMenu={this.props.activeMenu} 
				key={i.icon} 
				icon={i.icon} 
				text={i.text}
				card={i.card}
				changeActive={this.props.changeActive}
			/>
		);

		const flags = [
			{src: flagVen, alt:"flagVen", lang:"es" },
			{src: flagBra, alt:"flagBra", lang:"br" },
			{src: flagUsa, alt:"flagUsa", lang:"en" }
		];

		const flagComp = flags.map( (i) => 
			<a key={i.src} href="#" onClick={this.props.changeLang}><span className="icon"><img src={i.src} alt={i.alt} lang={i.lang} className={ this.props.lang.lang === i.lang ? "active-flag" : "" }/></span></a>
		);
		return (
			<header className={"header" + this.state.IOmenu} >
				<div className="top-menu"><ul>{buttonComp}</ul></div>
				<div className="social">{flagComp}</div>
				<span onClick={this.ioMenu} className="menu-btn">
					<span className="m-line"></span>
				</span>
			</header>
		)
	}
}