// Site configuration file.
// Your work should be placed here.
import { DefaultDataProvider } from "superset-dashboard";
import { MenuItem } from "./components/Types";

export const SUPERSET_DOMAIN = "http://localhost:9000";
export const SUPERSET_ENDPOINT = "http://localhost:8088";
export const SUPERSET_GUEST_USER = "guest";
export const SUPERSET_GUEST_PASS = "guest";

export const dataProvider = new DefaultDataProvider(SUPERSET_ENDPOINT, {
  username: SUPERSET_GUEST_USER,
  password: SUPERSET_GUEST_PASS,
});

// Id of the dashboard to display on the home page
export const HOME_PAGE_DASHBOARD_ID = "bcf5ca3d-1a68-4613-b585-2b4f265b61a0";
// List of dashboards to display.
// This list will be converted to a menu on the home page
export const DASHBOARDS_TO_DISPLAY: MenuItem[] = [];
