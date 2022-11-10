import CenterWrapper from "./Header/CenterWrapper";
import { DASHBOARDS_TO_DISPLAY } from "../config";
import { Link } from "./Types";
import NavbarWrapper from "./Header/NavbarWrapper";
import React from "react";
import SlimWrapper from "./Header/SlimWrapper";

export type HeaderProps = {
  title?: string;
  href?: string;
  links?: Link[];
  tag?: string;
};
const Header = ({
  title = "Superset",
  tag = "Superset",
  href = "/",
  links = [],
}: HeaderProps) => {
  return (
    <div className="it-header-wrapper">
      <SlimWrapper title={title} href={href} links={links} />
      <div className="it-nav-wrapper">
        <CenterWrapper title={title} tag={tag} />
        <NavbarWrapper menu={DASHBOARDS_TO_DISPLAY} />
      </div>
    </div>
  );
};

export default Header;
