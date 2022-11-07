import { Dashboard, DefaultDataProvider } from "superset-dashboard";

import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const dataProvider = new DefaultDataProvider("http://localhost:8088", {
  username: "guest",
  password: "guest",
});

const Index = () => {
  return (
    <Layout fullwidth>
      <Dashboard
        id="980cabb2-8a5b-434f-831b-469dd53172e5"
        domain="http://localhost:8088"
        dataProvider={dataProvider}
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
