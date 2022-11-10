import {
  HOME_PAGE_DASHBOARD_ID,
  SUPERSET_DOMAIN,
  dataProvider,
} from "../config";

import { Dashboard } from "superset-dashboard";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  return (
    <Layout fullwidth>
      <Dashboard
        id={HOME_PAGE_DASHBOARD_ID}
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
