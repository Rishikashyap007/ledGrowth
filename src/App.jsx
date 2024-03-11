import { useState } from "react";
import Partnership from "./components/partnership";
import FAQ from "./faq";

import "./App.css";

function App() {


function handleclick(){
  let answers = document.querySelectorAll(".accordion");
  answers.forEach((event) => {
    event.addEventListener("click", () => {
      if (event.classList.contains("active")) {
        event.classList.remove("active");
      } else {
        event.classList.add("active");
      }
    });
  });
}
  return (

    <>
      <Partnership />
      <div className="session-container">
        <h1 className="cont-title">Learning experience </h1>
        <div className="session">
          <h2 className="session-text">SESSION 1 | SEP 15TH</h2>
          <h2 className="session-title">Kick-off call</h2>
          <p className="session-desc">
            Meet the GrowthX community members you will be learning with. Get
            clarity on how you will learn the CRAFT of Partnership Led Growth.
            Talk about common problems you've faced while building partnerships
            and learn from your peers. Get access to a pre-read for the deep
            dive.
          </p>
        </div>
        <div className="session">
          <h2 className="session-text">SESSION 2 | SEP 16TH</h2>
          <h2 className="session-title">Partnerships Deep-Dive</h2>
          <p className="session-desc">
            <ul className="list">
              <li>Is your product ready for partnerships? Key litmus test.</li>
              <li>How does partnerships change by stage of the product?</li>

              <li>
                {" "}
                Core nuances of product integrations.
                <ul className="list1">
                  <li>How to define the right success metrics?</li>
                  <li>How to define the right success metrics?</li>
                  <li>
                    How to go from customer feedback insight to conviction
                    building?
                  </li>
                  <li>Mental models to choose your 'Ideal Partner Profile’</li>
                  <li>
                    Reach out plan for finding the right POC in a potential
                    partner company.
                  </li>
                  <li>
                    How to design first few calls, stakeholder alignment &
                    building trust with partners?
                  </li>
                  <li>
                    How to solve for early proof of concept & GTM limited
                    version?
                  </li>
                  <li>
                    How to build a cadence to drive integration adoption & track
                    success?
                  </li>
                </ul>
              </li>

              <li>
                Core nuances of channel partnerships.
                <ul className="list1">
                  <li> How to identify the right channel partners?</li>
                  <li>How to build an outreach strategy at Day 0?</li>
                  <li>
                    {" "}
                    How to create segmentation between self serve onboarding vs
                    white glove onboarding for channel partners?
                  </li>
                  <li>
                    {" "}
                    How to design for the marketing collaterals that helps
                    channel partners pitch effectively?{" "}
                  </li>
                  <li>
                    {" "}
                    How to create the right incentives for channel partners?
                  </li>
                  <li>
                    {" "}
                    How to track channel partner metric health & gamify for 1 to
                    100 scale?{" "}
                  </li>
                  <li>
                    {" "}
                    Key nuances of solving for churned channel partners. ‍{" "}
                  </li>
                </ul>
              </li>

              <li>
                {" "}
                Case Studies include:
                <div className="logos-cont">
                  <img
                    src=" https://assets-global.website-files.com/63a49822ee2304acc9455a42/6502bc565a2a96c905daf3c3_logos-plg.png"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </p>
        </div>
        <div className="session">
          <h2 className="session-text">SESSION 3 | SEP 18TH</h2>
          <h2 className="session-title">Project Briefing</h2>
          <p className="session-desc">
            Work with diverse set of peers - founders, strategy leaders, heads
            of partnerships, product, marketing, brand, & analytics to solve a
            partnership led problem statement in a live setting. This typically
            helps you solve cold-start problem while learning the CRAFT.
          </p>
        </div>
        <div className="session">
          <h2 className="session-text">SESSION 4 | SEP 23TH</h2>
          <h2 className="session-title">
            Program Director's Circle (Live setting)
          </h2>
          <p className="session-desc">
            Go multiple layers deeper with your program director into the CRAFT.
            Absorb feedback being discussed about some of the top proof of work
            built by members. Get access to intense Q&A with your program
            director and deepen your understanding of the nuances in partnership
            led growth.
          </p>
        </div>
      </div>

      <div className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-section">
            <p className="testimonial-title">GROWTHX MEMBER SINCE 2021</p>
            <h2 className="testimonial-headline">
              “I got actionable feedback on how to build partnerships for my
              company”
            </h2>
            <p className="description">
              Ashu's craft shows how businesses can grow by teaming up with
              partners. Even small companies can work with big ones to succeed.
              If you're starting a business in a new place and need help, this
              course is really useful. I appreciate how Ashu really listens to
              us. It's clear he cares about solving out problems. I think it's a
              great course and suggest others to take it too!”
            </p>
            <div className="testimonial-name-div">
              <div className="name-div">
                <h1 id="name">Rajnish Kumar</h1>
                <p id="role">Head, Demand Generation</p>
              </div>
              <div className="company-logo">
                <img
                  src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1d323dbd420ebdcb4a1c9_keka.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="testimonial-image-cont">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1d43d8cb6363179f11f76_rajnish.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="video-player">
        <div className="video-text">
          <h1>
            THIS CRAFT is a Part of the GROWTH<span>X</span> Experience
          </h1>
          <p>
            Access to this craft & much more comes as a part of Growthx
            Membership
          </p>
        </div>
        <iframe
          width="100%"
          height="60%"
          src={
            "https://player.vimeo.com/video/861896581?autoplay=1&muted=1&quality=720p&badge=0&autopause=0&player_id=0&app_id=58479 "
          }
          title="video player"
          fameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hero-section">
        <div className="hero-headline">
          <h2>Become a top 1% growth leader</h2>
        </div>
        <div className="hero-btns">
          <button id="btn1"> Become A Member</button>
          <button id="btn2"> Membership Guide </button>
        </div>
      </div>

      <div className="exclusive-content-container">
        <div className="exclusive-content-section">
          <div className="exclusive-content-text-container">
            <h2 className="exclusive-content-heading">
              GX members are leaders in marquee companies
            </h2>
          </div>
          <div className="exclusive-image-container">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530995d295eb56d6df5922f_elevate-logos-p-1080.png"
              alt="exclusive companies"
              className="exclusive-image"
            />
          </div>
          <button id="btn1"> Become A Member</button>
        </div>
      </div>

       <FAQ />

      <footer>
        <div className="row1">
        <div className="footer-title">
        <h2 class="first">Growth <span>X</span></h2>
        <p>GrowthX Education Labs Private Limited</p>
        </div>
        <div className="footer-menus">
        <a href="#" class="a1">
          Get in touch
        </a>
        <a href="#" class="a1">
          Terms & Conditions
        </a>
        <a href="#" class="a1">
          Privacy Policy
        </a>
        <a href="#" class="a1">
          We're hiring
        </a>
        </div>
        <div className="footer-icons">
        <i class="fa-brands fa-instagram a1"></i>
        <i class="fa-brands fa-linkedin a1"></i>
        <i class="fa-brands fa-twitter a1"></i>
        </div>
        </div>
        <hr />
       <div className="row2">
       <a href="#" class="a2">
          Chrome Extension{" "}
        </a>
        <a href="#" class="a2">
          Growth Shorts{" "}
        </a>
        <a href="#" class="a2">
          Capstone{" "}
        </a>
        <a href="#" class="a2">
          Community{" "}
        </a>
        <a href="#" class="a2">
          Membership Guide{" "}
        </a>
        <a href="#" class="a2">
          Origin story{" "}
        </a>
       </div>
      </footer>
    </>
  );
}

export default App;
