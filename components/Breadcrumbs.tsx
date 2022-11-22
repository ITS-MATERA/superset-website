import { Breadcrumb } from "components/Types";
import React from "react";
import classNames from "classnames";
import classes from "./Breadcrumbs.module.scss";
export type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
};
const Breadcrumbs = ({ breadcrumbs = [] }) => {
  if (breadcrumbs.length === 0) {
    return null;
  }
  return (
    <div className={classNames("container-fluid", classes.breadcrumbs)}>
      <div className="row">
        <div className="col">
          <nav
            className="breadcrumb-container"
            aria-label="Percorso di navigazione"
          >
            <ol className="breadcrumb">
              {breadcrumbs.map((breadcrumb, index) => (
                <li
                  key={index}
                  className={classNames(
                    "breadcrumb-item",
                    breadcrumb.active && "active"
                  )}
                >
                  {breadcrumb.active ? (
                    breadcrumb.label
                  ) : (
                    <a href={breadcrumb.href} title={breadcrumb.label}>
                      {breadcrumb.label}
                    </a>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="separator">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumbs;
