import React, { Component } from 'react';
//import logo from './eevee.png';
import './CSS/App.css';
import PageHeader from './Components/Header';
import ImagePane from './Components/ImagePane';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Interests from './Components/Interests';
import WorkExperience from './Components/WorkExperience';
import SkillTree from './Components/SkillTree';
import Eevee from './Images/eevee.png';
import Sedona from './Images/sedona.JPG';
import Overlay from './Components/Overlay';
import TimeLine from './Components/TimeLine';

class App extends Component {
    constructor() {
      super();
      this.state = {overlay: 'on'};
    }

    componentDidMount () {
        document.addEventListener('click', () => this.removeOverlay());
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.removeOverlay);
    }

    removeOverlay () {
        this.setState({ overlay: 'off' });
    }

    render() {
    if (this.state.overlay === 'on') {
        return (
            <Overlay/>
        );
    } else {
        return (
            <div className="App">
                <div id="background">
                    <img id="background-image" src={Eevee}/>
                </div>
                <div id="content">
                    <PageHeader />
                    <ImagePane />
                    <div className="resume-data">
                        <AboutMe />
                        <TimeLine />

                        <SkillTree/>
                        <Interests />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
    }
}

export default App;
