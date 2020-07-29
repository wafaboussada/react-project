import React, { Component } from "react";
import {withTranslation} from "react-i18next";

export class testimonials extends Component {
  render() {
    const { t } = this.props;
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>{t('testimonial.title')}</h2>
          </div>
          <div className="row">
          <div className="col-md-12">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src="img/testimonials/01.jpg" alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{t('testimonial.p1')}"</p>
                        <div className="testimonial-meta"> - Eurola </div>
                      </div>
                    </div>
                  </div>
          </div>
          <div className="col-md-12">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src="img/testimonials/01.jpg" alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{t('testimonial.p2')}"</p>
                        <div className="testimonial-meta"> - Laurence Dang </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
    );
  }
}

export default withTranslation('common')(testimonials);
