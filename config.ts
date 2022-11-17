import { DefaultDataProvider } from "superset-dashboard-sdk";
import { MenuItem } from "./components/Types";
import StaticConfigProvider from "./components/Superset/StaticConfigProvider";

export const SUPERSET_DOMAIN = "https://aress.its.engineering";
export const SUPERSET_ENDPOINT = SUPERSET_DOMAIN;
export const SUPERSET_GUEST_USER = "guest";
export const SUPERSET_GUEST_PASS = "guest";

export const dataProvider = new DefaultDataProvider(SUPERSET_ENDPOINT, {
  username: SUPERSET_GUEST_USER,
  password: SUPERSET_GUEST_PASS,
});

export const configProvider = new StaticConfigProvider()
  .addDashboardConfig({
    id: 4,
    uuid: "a4b1e3e4-827a-46a2-9fa0-0259816c64ec",
    name: "Cronicità",
    menu: "Tumori",
    slug: "cronicita-tumori",
  })
  .setHomePageDashboardConfig("cronicita-tumori");
