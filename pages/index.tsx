import { Dashboard, DefaultDataProvider } from "superset-dashboard";

import Layout from "../components/Layout";
import { dataProvider } from "../config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  return (
    <Layout fullwidth>
      <Dashboard
        id="980cabb2-8a5b-434f-831b-469dd53172e5"
        domain="http://localhost:8088"
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
