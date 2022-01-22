import React from 'react';
import gpt3Logo from '../../Assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Aaccess</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3Logo" />
          <p>
            Hayabusa K12 1282DK Evergreen, All Rights Reserved ©
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Hayabusa K12 1282DK</p>
          <p>0123456789</p>
          <p>STFU@project.gg</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved ©</p>
      </div>
    </div>
  );
};

export default Footer;
