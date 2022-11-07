import React from "react";
import SmallPrints from "./Footer/SmallPrints";
export type FooterProps = {
  title?: string;
  tag?: string;
};
const Footer = ({ title, tag }: FooterProps) => {
  return (
    <footer className="it-footer">
      <div className="it-footer-main">
        <div className="container">
          <section>
            <div className="row clearfix">
              <div className="col-sm-12">
                <div className="it-brand-wrapper">
                  <a href="#">
                    <svg className="icon">
                      <use href="bootstrap-italia/dist/svg/sprites.svg#it-code-circle"></use>
                    </svg>
                    <div className="it-brand-text">
                      <h2 className="no_toc">{title}</h2>
                      <h3 className="no_toc d-none d-md-block">{tag}</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SmallPrints />
    </footer>
  );
};

export default Footer;
