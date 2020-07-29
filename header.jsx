import React, { Component } from "react";
import {useTranslation} from "react-i18next";

const Header = (props) => {
  // render() {
    const {t, i18n} = useTranslation('common');
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h2 style={{color: "white"}}>
                    {t('intro.intro')}
                    <span></span>
                  </h2>
                  <p>
                    {t('intro.p')}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    {/* {t('welcome.title', {framework:'React'})} */}
                    {t('intro.freeQuote')}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  // }
}

export default Header;
