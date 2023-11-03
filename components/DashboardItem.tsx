import { Fragment, useEffect, useMemo, useRef } from "react";

import { Dashboard as EmbeddedDashboard } from "superset-dashboard-sdk";
import { NextRouter } from "next/router";
import { SUPERSET_DOMAIN } from "config";
import Spinner from "components/Spinner";
import { useDashboard } from "components/Superset";

export type DashboardItemProps = {
  id: string;
  router: NextRouter;
  showLoading?: boolean;
  onLoad?: (id: string) => void;
};

const DashboardItem = ({
  id,
  router,
  onLoad,
  showLoading = true,
}: DashboardItemProps) => {
  const { config, dashboard, guestToken } = useDashboard({ id });
  const loaded = useRef(false);
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
  useEffect(() => {
    if (dashboard !== null && !loaded.current) {
      loaded.current = true;
      onLoad?.(id);
    }
  }, [dashboard]);
  const mkt = [`patologia = 'BPCO'`].map((x) => ({
    id: "patologia",
    column: "patologia",
    operator: "IN",
    value: "BPCO",
  }));

  return (
    <Fragment>
      {dashboard === null && showLoading && <Spinner />}
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
