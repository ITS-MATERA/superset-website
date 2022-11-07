import React from "react";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation("common");
  return (
    <section className="py-4 border-white border-top">
      <div className="row">
        <div className="col-lg-4 col-md-4 pb-2">
          <h4>
            <a href="#">{t("footer.contact")}</a>
          </h4>
          <p>
            <strong>{t("footer.contact.name")}</strong>
            <br />
            {t("footer.contact.address")}
          </p>
          <div className="link-list-wrapper">
            <ul className="footer-list link-list clearfix">
              <li>
                <a
                  className="list-item"
                  href={`mailto:${t("footer.contact.pec_value")}`}
                >
                  {t("footer.contact.pec")}
                </a>
              </li>
              <li>
                <a className="list-item" href="#">
                  {t("footer.contact.office")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-4 pb-2">
          <h4>
            <a href="#" title="Vai alla pagina: Lorem Ipsum">
              Lorem Ipsum
            </a>
          </h4>
        </div>
        <div className="col-lg-4 col-md-4 pb-2">
          <div className="pb-2">
            <h4>
              <a href="#" title="Vai alla pagina: Seguici su">
                {t("footer.follow")}
              </a>
            </h4>
            <ul className="list-inline text-left social">
              <li className="list-inline-item">
                <a className="p-2 text-white" href="#" target="_blank">
                  <svg className="icon icon-sm icon-white align-top">
                    <use href="bootstrap-italia/dist/svg/sprites.svg#it-designers-italia"></use>
                  </svg>
                  <span className="visually-hidden">Designers Italia</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 text-white" href="#" target="_blank">
                  <svg className="icon icon-sm icon-white align-top">
                    <use href="bootstrap-italia/dist/svg/sprites.svg#it-twitter"></use>
                  </svg>
                  <span className="visually-hidden">Twitter</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 text-white" href="#" target="_blank">
                  <svg className="icon icon-sm icon-white align-top">
                    <use href="bootstrap-italia/dist/svg/sprites.svg#it-medium"></use>
                  </svg>
                  <span className="visually-hidden">Medium</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 text-white" href="#" target="_blank">
                  <svg className="icon icon-sm icon-white align-top">
                    <use href="bootstrap-italia/dist/svg/sprites.svg#it-behance"></use>
                  </svg>
                  <span className="visually-hidden">Behance</span>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Contact;
