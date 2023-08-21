//import $ from "jquery";
import { DefaultDataProvider } from "superset-dashboard-sdk";
import StaticConfigProvider from "./components/Superset/StaticConfigProvider";
import sitemap from "./sitemap.js";

export const SUPERSET_DOMAIN = "https://aress.its.engineering";
export const SUPERSET_ENDPOINT = SUPERSET_DOMAIN;
export const SUPERSET_GUEST_USER = "guest";
export const SUPERSET_GUEST_PASS = "guest";

export const dataProvider = new DefaultDataProvider(SUPERSET_ENDPOINT, {
  username: SUPERSET_GUEST_USER,
  password: SUPERSET_GUEST_PASS,
});
export const configProvider = new StaticConfigProvider(sitemap);
