import { Dashboard, DefaultDataProvider } from "superset-dashboard";
import { SUPERSET_DOMAIN, dataProvider } from "../config";

import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  return (
    <Layout fullwidth>
      <Dashboard
        id="3166c187-bd00-4ec3-8687-d11c755d3d64"
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
