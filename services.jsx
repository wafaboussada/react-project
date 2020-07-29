import React, { Component } from "react";
import {withTranslation} from "react-i18next";

export class Services extends Component {
  render() {
    const { t } = this.props;
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>{t('services.title')}</h2>
          </div>
          <div className="row">
          <div className="col-md-3">
                    {" "}
                    <i className="fa fa-code"></i>
                    <div className="service-desc">
                      <h3>{t('services.title1')}</h3>
                      <p>{t('services.p1')}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <i className="fa fa-pie-chart"></i>
                    <div className="service-desc">
                      <h3>{t('services.title2')}</h3>
                      <p>{t('services.p2')}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <i className="fa fa-cloud"></i>
                    <div className="service-desc">
                      <h3>{t('services.title3')}</h3>
                      <p>{t('services.p3')}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <i className="fa fa-plane"></i>
                    <div className="service-desc">
                      <h3>{t('services.title4')}</h3>
                      <p>{t('services.p4')}</p>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(Services);
