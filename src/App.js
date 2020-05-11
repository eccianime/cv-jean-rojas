import React from 'react';

import './css/styles.css';
import './css/theme-colors/green.css';

import globalLang from './globalLang';

import Preloader from './components/Preloader';
import Header from './components/Header';
import HomeCard from './components/HomeCard';
import AboutCard from './components/AboutCard';
import ResumeCard from './components/ResumeCard';
import PortfolioCard from './components/PortfolioCard';
import BlogCard from './components/BlogCard';
import ContactCard from './components/ContactCard';
import GridLines from './components/GridLines';

export default class App extends React.Component{
	state = {
		activeMenu: "la-home",
		activeCard: "home-card",
		preloadervisible: true,
		linesLoaded: " loaded ",
		activeLang: "es",
		modal:{
			visible: false,
			imgsrc: null,	
		} ,
	}
	changeActive = (e) =>{
		const data = {
			am: e.target.classList[2],
			ac: e.target.dataset.card,
		};
		this.setState({
			linesLoaded: "",
		})
		setTimeout( () => {
			this.setState({
				activeMenu: data.am,
				activeCard: data.ac,
				linesLoaded: " loaded ",
			})
		}, 1000 )
		
	 } 
	changeLang = (e) => {
		this.setState({
			activeLang: e.target.lang === "" ? e.target.firstChild.lang : e.target.lang
		})
	}
	componentDidMount(){
		setTimeout( () => {
			this.setState({preloadervisible: false});
		}, 2000 )
	}
	showHideModal = (data) =>{
		console.log(this.state.modal);
		this.setState({
			modal:{
				visible: this.state.modal.visible === true ? false : true,
				imgsrc: data
			}
		})
	}
	render(){
		const activeLang = globalLang[this.state.activeLang];
		return (
			<div className="page">
				<div className="back-drop-modal" onClick={()=>this.showHideModal(null)} style={{display: this.state.modal.visible === true ? "block" : "none"}}>
					<div className="back-drop-modal-content"><img src={this.state.modal.imgsrc} alt="" /></div> 
				</div>
				<Preloader visible={this.state.preloadervisible} />
				<Header 
					activeCard = { this.state.activeCard } 
					activeMenu = { this.state.activeMenu }
					changeActive = { this.changeActive } 
					changeLang = { this.changeLang } 
					lang = { activeLang }
				/>
				<div className="container">
					<HomeCard 
						activeCard = { this.state.activeCard } 
						id= "home-card" 
						lang = { activeLang }
					/>
					<AboutCard 
						activeCard = { this.state.activeCard } 
						id = "about-card"
						lang = { activeLang }
					/>
					<ResumeCard 
						activeCard = { this.state.activeCard } 
						id = "resume-card"
						lang = { activeLang }
					/>
					<PortfolioCard 
						activeCard = { this.state.activeCard } 
						id = "portfolio-card"
						lang = { activeLang }
						showHideModal = { this.showHideModal }
					/>
					<BlogCard 
						activeCard = { this.state.activeCard } 
						id = "blog-card"
						lang = { activeLang }
					/>
					<ContactCard 
						activeCard = { this.state.activeCard } 
						id = "contact-card"
						lang = { activeLang }
					/>
					<GridLines loaded={ this.state.linesLoaded } />
				</div>
			</div>
		)
	}
}