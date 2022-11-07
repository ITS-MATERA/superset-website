import { Link, MenuItem } from "./Types";
import React, { useEffect, useState } from "react";

import CenterWrapper from "./Header/CenterWrapper";
import NavbarWrapper from "./Header/NavbarWrapper";
import SlimWrapper from "./Header/SlimWrapper";
import { dataProvider } from "../config";

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
  const [menu, setMenu] = useState<MenuItem[]>([]);
  useEffect(() => {
    (async () => {
      const dashboards = await dataProvider.fetchDashboards();
      const menu = dashboards.map((dashboard) => ({
        href: `/dashboard/${dashboard.embedded!.uuid}`,
        label: dashboard.dashboard_title,
      }));
      setMenu(menu);
    })();
  }, []);
  return (
    <div className="it-header-wrapper">
      <SlimWrapper title={title} href={href} links={links} />
      <div className="it-nav-wrapper">
        <CenterWrapper />
        <NavbarWrapper menu={menu} />
      </div>
    </div>
  );
};

export default Header;
