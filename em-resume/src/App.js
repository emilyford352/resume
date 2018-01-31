import React, { Component } from 'react';
import './CSS/App.css';
import PageHeader from './Components/Header';
import ImagePane from './Components/ImagePane';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Interests from './Components/Interests';
import SkillTree from './Components/SkillTree';
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
                <div id="content">
                    <PageHeader />
                    <div className="data-container">
                        <ImagePane />
                        <div className="resume-data">
                            <AboutMe />
                            <SkillTree/>
                            <TimeLine />
                            <Interests />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
    }
}

export default App;
