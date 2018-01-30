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

class App extends Component {
  render() {
    return (
      <div className="App">
          <PageHeader />
          <ImagePane />
          <div className="resume-data">
            <AboutMe />
            <Education />
            <SkillTree />
            <WorkExperience />
            <Interests />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
