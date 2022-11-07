import React from "react";
export type CenterWrapperProps = {
  title?: string;
  tag?: string;
};
const CenterWrapper = ({ title = "Superset", tag = "Data Explorer" }) => {
  return (
    <div className="it-header-center-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-header-center-content-wrapper">
              <div className="it-brand-wrapper">
                <a href="/">
                  <svg className="icon" aria-hidden="true">
                    <use href="/bootstrap-italia/dist/svg/sprites.svg#it-pa"></use>
                  </svg>
                  <div className="it-brand-text">
                    <div className="it-brand-title">{title}</div>
                    <div className="it-brand-tagline d-none d-md-block">
                      {tag}
                    </div>
                  </div>
                </a>
              </div>
              <div className="it-right-zone">
                <div className="it-socials d-none d-md-flex">
                  <span>Seguici su</span>
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook" target="_blank">
                        <svg className="icon">
                          <use href="/bootstrap-italia/dist/svg/sprites.svg#it-facebook"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Github" target="_blank">
                        <svg className="icon">
                          <use href="/bootstrap-italia/dist/svg/sprites.svg#it-github"></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter" target="_blank">
                        <svg className="icon">
                          <use href="/bootstrap-italia/dist/svg/sprites.svg#it-twitter"></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterWrapper;
