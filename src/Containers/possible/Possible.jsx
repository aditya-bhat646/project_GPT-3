import React from 'react';
import possibleImage from '../../Assets/possibility.png';
import './possible.css';

const Possible = () => {
  return (
    <div
      className="gpt3__possible section__padding"
      id="possible"
    >
      <div className="gpt3__possible-image">
        <img src={possibleImage} alt="possibleImage"></img>
      </div>
      <div className="gpt3__possible-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence
          unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the
          attachment. Party we years to order allow asked of.
        </p>
        <h4 id="h4-2">Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possible;
