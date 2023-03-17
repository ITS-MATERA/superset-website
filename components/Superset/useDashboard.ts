import { ConfigProviderInterface, DashboardConfig } from "./Types";
import {
  Dashboard,
  DataProviderInterface,
} from "superset-dashboard-sdk/build/DataProvider.types";
import { useEffect, useMemo, useState } from "react";

import { useSupersetContext } from "components/Superset/SupersetContext";

export type UseDashboardProps = {
  /** Configured dashboard */
  config?: DashboardConfig;
  /** Id, slug or uuid of configured dashboard */
  id?: string | number;
};
export type UseDashboardResult = {
  /** Provided or resolved dashboard  */
  config: DashboardConfig;
  /** Resolved dashboard from API */
  dashboard?: Dashboard | null;
  /** Access token generated and used to obtain data. */
  guestToken?: string | null;
  /** Access to dataProvider interface to obtain data.  */
  dataProvider?: DataProviderInterface;
  /** Access to configProvider interface to obtain configurations. */
  configProvider?: ConfigProviderInterface;
};

export type UseConfigProps = {
  id?: string | number;
  config?: DashboardConfig;
};

function createRLS(filters) {
  let array = [];
  filters?.forEach((element) => {
    array.push({ clause: element });
  });
  return array;
}
export const useConfig = ({ config, id }: UseConfigProps): DashboardConfig => {
  const { configProvider } = useSupersetContext();
  const dashboardConfig = useMemo(
    () => config || configProvider.getDashboardConfig(id),
    [config, configProvider]
  );

  return dashboardConfig;
};
/**
 * Load all required informations to work with specific dashboard
 * loaded from superset API.
 */
const useDashboard = ({
  config,
  id,
}: UseDashboardProps): UseDashboardResult => {
  const dashboardConfig = useConfig({ config, id });
  const { dataProvider, configProvider } = useSupersetContext();
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [guestToken, setGuestToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // Fetch new guestToken and load dashboard config from remote
      // superset instance. Dashboard config is used to load
      // filters necessary to render everything.
      const guestToken = await dataProvider.fetchGuestToken(
        [{ id: dashboardConfig.uuid, type: "dashboard" }],
        createRLS(dashboardConfig.filter)
      );
      const dashboard = await dataProvider.fetchDashboardInfo(
        guestToken,
        dashboardConfig.id
      );
      setDashboard(dashboard);
      setGuestToken(guestToken);
    })();
  }, [dashboardConfig]);

  return {
    dashboard,
    guestToken,
    config: config || dashboardConfig,
    dataProvider,
    configProvider,
  };
};

export default useDashboard;
