import { SUPERSET_DOMAIN, configProvider, dataProvider } from "../config";

import { Dashboard } from "superset-dashboard-sdk";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  const homeDashboard = configProvider.getHomePageDashboardConfig();
  return (
    <Layout fullwidth>
      <Dashboard
        uuid={homeDashboard.uuid}
        domain={SUPERSET_DOMAIN}
        dataProvider={dataProvider}
        fullheight
      />
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
export default Index;
