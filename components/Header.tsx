import CenterWrapper from "./Header/CenterWrapper";
import { Link } from "./Types";
import NavbarWrapper from "./Header/NavbarWrapper";
import React from "react";
import SlimWrapper from "./Header/SlimWrapper";

export type HeaderProps = {
  title?: string;
  href?: string;
  links?: Link[];
};
const Header = ({
  title = "Superset",
  href = "/",
  links = [],
}: HeaderProps) => {
  return (
    <div className="it-header-wrapper">
      <SlimWrapper title={title} href={href} links={links} />
      <div className="it-nav-wrapper">
        <CenterWrapper />
        <NavbarWrapper menu={[]} />
      </div>
    </div>
  );
};

export default Header;
