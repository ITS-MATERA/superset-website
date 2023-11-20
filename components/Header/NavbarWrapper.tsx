import Dropdown from "./Dropdown";
import { MenuItem } from "../Types";
import React from "react";
import { useTranslation } from "next-i18next";
export type NavbarWrapperProps = {
  menu: MenuItem[];
};
const NavbarWrapper = ({ menu = [] }: NavbarWrapperProps) => {
  const { t } = useTranslation("common");
  return (
    <div className="it-header-navbar-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav
              className="navbar navbar-expand-lg has-megamenu"
              aria-label={t("header.navbar.principal_nav")}
            >
              <button
                className="custom-navbar-toggler"
                type="button"
                aria-controls="nav1"
                aria-expanded="false"
                aria-label={t("header.navbar.principal_nav_toggle")}
                data-bs-toggle="navbarcollapsible"
                data-bs-target="#nav1"
              >
                <svg className="icon bg-override">
                  <use href="/bootstrap-italia/dist/svg/sprites.svg#it-burger"></use>
                </svg>
              </button>
              <div
                className="navbar-collapsable"
                id="nav1"
                style={{ display: "none" }}
              >
                <div className="overlay" style={{ display: "none" }}></div>
                <div className="close-div">
                  <button className="btn close-menu" type="button">
                    <span className="visually-hidden">
                      {t("header.navbar.principal_nav_close")}
                    </span>
                    <svg className="icon">
                      <use href="/bootstrap-italia/dist/svg/sprites.svg#it-close-big"></use>
                    </svg>
                  </button>
                </div>
                <div className="menu-wrapper">
                  <ul className="navbar-nav">
                    {menu.map((menu, index) =>
                      menu.items || menu.sections ? (
                        <Dropdown
                          key={index}
                          as="li"
                          label={menu.label}
                          items={menu.items}
                          sections={menu.sections}
                          style={{
                            "max-height": "300px",
                            "overflow-y": "auto",
                            "overflow-x": "hidden",
                          }}
                        />
                      ) : (
                        <li
                          key={index}
                          className={`nav-item ${menu.active ? "active" : ""}`}
                        >
                          <a
                            className={`nav-link ${
                              menu.active ? "active" : ""
                            }`}
                            href={menu.href}
                          >
                            <span>{menu.label}</span>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWrapper;
