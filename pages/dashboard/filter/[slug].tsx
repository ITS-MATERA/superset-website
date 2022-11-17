import { NativeFilterPanel, useSupersetContext } from "components/Superset";
import { useEffect, useMemo, useState } from "react";

import { Dashboard } from "superset-dashboard-sdk/build/DataProvider.types";
import { Layout } from "components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { slug } = router.query;
  const id = (slug as string) || null;
  const { dataProvider, configProvider } = useSupersetContext();
  const config = useMemo(() => configProvider.getDashboardConfig(id), [id]);
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [guestToken, setGuestToken] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      // Fetch new guestToken and load dashboard config from remote
      // superset instance. Dashboard config is used to load
      // filters necessary to render everything.
      const guestToken = await dataProvider.fetchGuestToken(
        [{ id: config.uuid, type: "dashboard" }],
        []
      );
      const dashboard = await dataProvider.fetchDashboardInfo(
        guestToken,
        config.id
      );
      setDashboard(dashboard);
      setGuestToken(guestToken);
    })();
  }, []);

  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-4">
          <br />
          <NativeFilterPanel
            config={config}
            dashboard={dashboard}
            guestToken={guestToken}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
