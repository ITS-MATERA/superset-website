import { Link, Section } from "../Types";

import React from "react";
import { useTranslation } from "next-i18next";

export type DropdownProps = {
  label?: string;
  sectionName?: string;
  items?: Link[];
  selected?: string;
  sections?: Section[];
  as?: React.ElementType;
  style?: {};
};

const render = (className = "col-12", sectionName, items, index = 0) => (
  <div className={className} key={index}>
    <div className="link-list-wrapper">
      {sectionName && <div className="link-list-heading">{sectionName}</div>}
      <ul className="link-list">
        {items?.map((item, index) =>
          item.divider ? (
            <li key={index}>
              <span className="divider"></span>
            </li>
          ) : (
            <li key={index}>
              <a
                className={`dropdown-item list-item ${
                  item.active ? "active" : ""
                }`}
                href={item.href}
              >
                <span>{item.label}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  </div>
);

const Dropdown = ({
  label,
  sectionName,
  selected,
  items,
  sections,
  as,
  style,
}: DropdownProps) => {
  const { t } = useTranslation("common");
  const Component = as || "div";
  return (
    <Component className={`nav-item dropdown ${sections ? "megamenu" : ""}`}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className={as !== "li" ? "visually-hidden" : ""}>{label}</span>
        {selected && <span>{selected}</span>}
        <svg className="icon icon-xs">
          <use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
        </svg>
      </a>
      <div className="dropdown-menu" role="region" style={style}>
        <div className="row">
          {items && render("col-lg-12", sectionName, items)}
          {sections?.map((section, index) =>
            render(
              `col-lg-${12 / sections.length}`,
              section.name,
              section.items,
              index
            )
          )}
        </div>
      </div>
    </Component>
  );
};

export default Dropdown;
