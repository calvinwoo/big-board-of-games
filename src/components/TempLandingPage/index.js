import React from 'react';
import './templandingpage.css';
import './fonts.css';

/*
  Legend of webpack image loading: https://www.davidmeents.com/blog/how-to-set-up-webpack-image-loader/
 */

const gmailTo = 'https://mail.google.com/mail/?view=cm&fs=1&to=info@bigboardofgames.com&subject=Sign%20Me%20Up!&body=I%20would%20like%20to%20learn%20more%20about%20The%20Big%20Board%20of%20Games!'; // eslint-disable-line max-len
const mailTo = 'mailto:info@bigboardofgames.com&subject=Subscribe!&body=I%20would%20like%20to%20learn%20more%20about%20The%20Big%20Board%20of%20Games!'; // eslint-disable-line max-len
const intro = 'Learn more about the new online resource and community for board games, coming soon.'; // eslint-disable-line max-len
const send = 'Join our mailing list below by sending us a quick message at <b>info@bigboardofgames.com</b>'; // eslint-disable-line max-len

const TempLandingPage = () => (
  <section className="main content">
    <div className="container container-main">
      <h1 className="cover-heading">THE BIG BOARD OF GAMES</h1>
      <p className="lead">{intro}</p>
      <a className="lead title-link" href="http://www.bigboardofgames.com">www.bigboardofgames.com</a>
      <p className="lead secondary">{send}</p>
      <p className="lead">
        <a
          className="btn btn-lg btn-default"
          href={gmailTo}
        >
          Gmail
        </a>
        <a
          className="btn btn-lg btn-default"
          href={mailTo}
        >
          Outlook
        </a>
      </p>
    </div>
  </section>
);

export default TempLandingPage;
