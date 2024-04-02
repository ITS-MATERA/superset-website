import AccessTopWrapper from "./AccessTopWrapper";
import Dropdown from "./Dropdown";
import { Link } from "../Types";
import React from "react";
import { useTranslation } from "next-i18next";

export type SlimWrapperProps = {
  title: string;
  href: string;
  links: Link[];
};
const SlimWrapper = ({
  title = "Superset",
  href = "/",
  links = [],
}: SlimWrapperProps) => {
  const { t } = useTranslation("common");
  return (
    <div className="it-header-slim-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="it-header-slim-wrapper-content">
              <a className="d-none d-lg-block navbar-brand" href={href}>
                {title}
              </a>
              <div className="nav-mobile">
                <nav aria-label={t("header.top.accessory_nav")}>
                  <a
                    className="it-opener d-lg-none"
                    data-bs-toggle="collapse"
                    href={href}
                    role="button"
                    aria-expanded="false"
                    aria-controls="menu4"
                  >
                    <span>{title}</span>
                    <svg className="icon" aria-hidden="true">
                      <use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                    </svg>
                  </a>
                  <div className="link-list-wrapper collapse" id="menu1a">
                    {/* <ul className="link-list">
                      {links.map((link) => (
                        <li key={link.href}>
                          <a
                            className={`list-item ${
                              link.active ? "active" : ""
                            }`}
                            href={link.href}
                            aria-current={link.active ? "page" : undefined}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </nav>
              </div>
              {/* <div className="it-header-slim-right-zone">
                <Dropdown
                  label={t("header.top.choose_lang")}
                  selected="IT"
                  items={[
                    {
                      label: "IT",
                      href: "/it",
                      active: true,
                    },
                  ]}
                /> */}
              <AccessTopWrapper />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlimWrapper;
