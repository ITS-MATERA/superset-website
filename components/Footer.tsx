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
        <div className="container-fluid">
          <section>
            <div className="row clearfix">
              <div className="col-sm-12 col-lg-4 col-md-6">
                <div className="it-brand-wrapper" style={{ width: "380px" }}>
                  <a href="https://maps.app.goo.gl/TyuDcENeq2Ncum9j8">
                    <svg className="icon">
                      <use href="/bootstrap-italia/dist/svg/sprites.svg#it-code-circle"></use>
                    </svg>
                    <div className="it-brand-text">
                      <h2 className="no_toc">{title}</h2>
                      <hr />
                      <h3 className="no_toc d-none d-md-block">
                        {tag.split(" - ").map((item, index) => (
                          <span
                            style={{ display: "block", clear: "both" }}
                            key={index}
                          >
                            {item}
                          </span>
                        ))}
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <SmallPrints /> */}
    </footer>
  );
};

export default Footer;
