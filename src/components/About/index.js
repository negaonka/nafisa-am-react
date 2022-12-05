import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hi there, my name is Nafisa Mohamed. I am a 31 year old newly qualified 
            Full Stack developer living in Birmingham, UK. I have a BSc
            in Biomedical Science but but having spent many years away from that field
            I decided to pursue a career in web development and have now gained a certificate 
            in Full Stack Web Development from the University of Birmingham.
            When I'm not working, I like to spend my time being active. I like going
            for long walks and small hikes with friends and family.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
