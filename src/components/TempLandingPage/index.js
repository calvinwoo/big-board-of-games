import React from 'react';
import PropTypes from 'prop-types';
import './templandingpage.css';
import './fonts.css';

/*
  Legend of webpack image loading: https://www.davidmeents.com/blog/how-to-set-up-webpack-image-loader/
 */

const propTypes = {
  page: PropTypes.object,
};

const defaultProps = {
  page: {},
};

const TempLandingPage = ({ page }) => (
  <section className="main content">
    <div className="container container-main">
        <h1 className="cover-heading">THE BIG BOARD OF GAMES</h1>
        <p className="lead">Learn more about the new online resource and community for board games, coming soon.</p>
        <a className="lead title-link" href="http://www.bigboardofgames.com">www.bigboardofgames.com</a>
        <p className="lead secondary">Join our mailing list below by sending us a quick message at <b>info@bigboardofgames.com</b></p>
        <p className="lead">
        <a className="btn btn-lg btn-default" href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bigboardofgames.com&subject=Sign%20Me%20Up!&body=I%20would%20like%20to%20learn%20more%20about%20The%20Big%20Board%20of%20Games!">
            Gmail
            </a>
            <a className="btn btn-lg btn-default"
                href="mailto:info@bigboardofgames.com&subject=Subscribe!&body=I%20would%20like%20to%20learn%20more%20about%20The%20Big%20Board%20of%20Games!">
            Outlook
            </a>
        </p>
    </div>
  </section>
);

TempLandingPage.propTypes = propTypes;
TempLandingPage.defaultProps = defaultProps;
export default TempLandingPage;




