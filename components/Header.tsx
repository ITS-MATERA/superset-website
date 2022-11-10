import CenterWrapper from "./Header/CenterWrapper";
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
        <NavbarWrapper
          menu={[
            {
              label: "Popolazione",
              href: "/dashboard/b70bcc67-d8fb-476b-88a0-aa2688137561",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Header;
