import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  return (
    <Layout fullwidth>
      <h1>Hello, Template!</h1>
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
