import React, { useMemo } from "react";

import CenterWrapper from "./Header/CenterWrapper";
import { Link } from "./Types";
import NavbarWrapper from "./Header/NavbarWrapper";
import SlimWrapper from "./Header/SlimWrapper";
import { useSupersetContext } from "components/Superset";

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
  const { configProvider } = useSupersetContext();
  const menu = useMemo(() => {
    const dashboards = configProvider.getAllDashboards();
    return dashboards.reduce((menu, dashboard) => {
      if (!dashboard.menu) {
        return menu;
      }
      let menuItem =
        menu.find((m) => m.label === dashboard.menu) ||
        (() => {
          const item = { label: dashboard.menu, items: [] };
          menu.push(item);
          return item;
        })();
      const landing = dashboard.prefilter === true ? "filter" : "dashboard";
      if (dashboard.section) {
        let section =
          menuItem.items.find((s) => s.label === dashboard.section) ||
          (() => {
            const item = { label: dashboard.section, items: [] };
            menuItem.items.push(item);
            return item;
          })();
        section.items.push({
          label: dashboard.name,
          href: `/${landing}/${dashboard.slug}`,
        });
      } else {
        menuItem.items.push({
          label: dashboard.name,
          href: `/${landing}/${dashboard.slug}`,
        });
      }
      return menu;
    }, []);
  }, [configProvider]);

  return (
    <div className="it-header-wrapper">
      <SlimWrapper title={title} href={href} links={links} />
      <div className="it-nav-wrapper">
        <CenterWrapper title={title} tag={tag} />
        <NavbarWrapper menu={menu} />
      </div>
    </div>
  );
};

export default Header;
