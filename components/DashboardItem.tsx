import { Fragment, useMemo } from "react";

import { Dashboard as EmbeddedDashboard } from "superset-dashboard-sdk";
import { NextRouter } from "next/router";
import { SUPERSET_DOMAIN } from "config";
import Spinner from "components/Spinner";
import { useDashboard } from "components/Superset";

export type DashboardItemProps = {
  id: string;
  router: NextRouter;
};

const DashboardItem = ({ id, router }: DashboardItemProps) => {
  const { config, dashboard, guestToken } = useDashboard({ id });
  const nativeFilters = useMemo(() => {
    const jsonMetadata = dashboard?.getJsonMetadata();
    if (jsonMetadata === null) {
      return [];
    }
    const nativeFilters = jsonMetadata?.native_filter_configuration;
    const filters = nativeFilters
      ?.map((filter) => ({
        id: filter.id,
        column: filter?.targets?.[0]?.column?.name,
        operator: "IN",
        value: router?.query[filter.id] as string,
      }))
      .filter((f) => f.value !== undefined);
    return filters;
  }, [router.query, dashboard]);
  return (
    <Fragment>
      {dashboard === null && <Spinner />}
      {dashboard !== null && (
        <EmbeddedDashboard
          uuid={config.uuid}
          domain={SUPERSET_DOMAIN}
          guestToken={guestToken}
          nativeFilters={nativeFilters}
          fullheight
          uiConfig={{
            hideTitle: true,
          }}
        />
      )}
    </Fragment>
  );
};

export default DashboardItem;
