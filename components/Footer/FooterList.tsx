import React from "react";
export type FooterListItem = {
  href?: string;
  label?: string;
};
export type FooterListProps = {
  title?: string;
  items: FooterListItem[];
  className: string;
};
const FooterList = ({
  className = "col-lg-3 col-md-3 col-sm-6",
  title,
  items,
}: FooterListProps) => (
  <div className={className}>
    <h4>
      <a href="#">{title}</a>
    </h4>
    <div className="link-list-wrapper">
      <ul className="footer-list link-list clearfix">
        {items?.map((item, index) => (
          <li key={index}>
            <a className="list-item" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterList;
