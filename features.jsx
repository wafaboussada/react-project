import React, { Component } from "react";
import {withTranslation} from "react-i18next";

export class features extends Component {
  render() {
    const { t } = this.props;
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
    <h2>{t('features.intro')}</h2>
    <p>{t('features.p1')}</p>
    <p>{t('features.p2')}</p>
    <p>{t('features.p3')}</p>
          </div>
          <div className="row">
            {/* {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."} */}
              <div className="col-xs-4 col-md-4">
                    {" "}
                    <i className="fa fa-comments-o"></i>
                    <h3>{t('features.title1')}</h3>
                    <p>{t('features.px1')}</p>
                  </div>
                  <div className="col-xs-4 col-md-4">
                    {" "}
                    <i className="fa fa-group"></i>
                    <h3>{t('features.title2')}</h3>
                    <p>{t('features.px2')}</p>
                  </div>
                  <div className="col-xs-4 col-md-4">
                    {" "}
                    <i className="fa fa-magic"></i>
                    <h3>{t('features.title3')}</h3>
                    <p>{t('features.px3')}</p>
                  </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(features);
