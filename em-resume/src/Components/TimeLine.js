import React, { Component } from 'react';
import TimeLineObject from './TimeLineObject';

class TimeLine extends Component {
  render() {
    return (
      <div className="timeline">
          <h1>
              Timeline
          </h1>
          <div className="container">
              <div className="timeline">
                  <TimeLineObject title="Synopsys" dates="1/17-Present" position="Software Engineer" description="Black Duck was aquired
                    by Synopsys in the beginning of January. I am currently fulfilling an equivalent position to my position at Black Duck, working as a front end developer on the flagship product, The Hub."/>
                  <TimeLineObject title="Black Duck Software" dates="5/17-12/17" position="Software Engineer" description="Black Duck Software is a company that focuses
                  on open source software. Their main product, The Hub, is a product which customers can scan their codebase and get a list of vulnerabilities, operational risk
                  and licensing issues their code may have. My role as a
                  Software Engineer for Black Duck Software was one of the most crucial roles of my career. I was able
                  to transition from being a Quality Assurance Engineer at the company to being a developer with only a few months of doing
                  overlapping work. Black Duck runs Hackathons for its engineers to participate in twice a year. I had been considering the
                  transition from quality assurance to front end engineering for awhile do to my extreme interested in UX/UI and projects in college that I
                  really enjoyed. I decided to do
                  a Hackathon project that was focused on the front end of the product and loved it! Through doing this Hackathon and speaking
                  with my managers, I was able to transfer into the UI team. I truly fell in love with front end software from there. At Black Duck,
                  we used Backbone/Marionette as a framework. I quickly came up to speed with this framework in a matter of months. From there I participated
                  in developing features and fixing bugs. Going to work no longer felt like going to work because I was working on something I loved!"/>
                  <TimeLineObject title="Black Duck Software" dates="9/16-5/17" position="QA Engineer" description="Black Duck Software is
                    the first company I have worked as a full time employee! Black Duck hired me in September of 2016 as a Quality Assurance
                    Engineer. In this role, I participated in an agile software development lifecycle. I participated in testing quarterly releases by
                    writing test cases and putting those test cases into automation scripts. I learned Java (with Selenium) in this role. I was
                    able to come up to speed with the language and testing framework within weeks. In the short time I was in this role, I was
                    able to churn out quite a bit of automation scripts for the main product."/>
                  <TimeLineObject title="Graduated College - WIT" dates="August 2016" position="BS Computer Engineering" description="We did it! Class of 16'"/>
                  <TimeLineObject title="C Squared Systems" dates="August 2015 – July 2016 " position="QA Intern" description="C Squared Systems
                  was the next quality assurance role I embarked in. This role was crucial in my career because it was where I was first
                  introduced to automation. Learning Python and Selenium and using those tools to create scripts was something I
                  thoroughly enjoyed; from there I knew I definitely wanted to be writing software! At this company, I tested and wrote scripts throughout release cycles to test
                  C Squared’s software product, SitePortal, a site consumers use to track their RF device health."/>
                  <TimeLineObject title="Virgin Pulse" dates="December 2014 - July 2015" position="QA Engineer Intern/Support Analyst" description="
                    Virgin Pulse is an exquisite company, focusing on healthcare within the workplace. This was the first company that
                    I was introduced to the software development lifecycle and the agile process. In this position, I designed test cases for
                     scenarios throughout the Virgin Pulse site. I also participated in bi-weekly code releases to ensure code quality and ran tests during
                     the release to confirm code went through to the server. I was able to put my SQL knowledge to good use
                     by writing queries to look into member issues and test bugs. This company gave me great exposure to the engineering field that would
                     be helpful for years to come."/>
                  <TimeLineObject title="Enrolled in College - WIT" dates="August 2012" position="Computer Engineering Student"
                  description="I had an amazing experience at Wentworth Institute of Technology. Through lots of lab
                  work, internships, and intense coursework, I learned a ton about the engineering field.
                    I participated in a club called WIRE,
                    a club where students could have their own radio show. My radio show was called So Much Pun!
                     I also tutored in Calculus and Differential Equations. I thoroughly enjoyed my time at Wentworth,
                     finishing with a 3.4 GPA. "/>
              </div>
          </div>
      </div>
    );
  }
}

export default TimeLine;
