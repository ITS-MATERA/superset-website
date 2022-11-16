import { SUPERSET_DOMAIN, dataProvider } from "../../config";

import { Dashboard } from "superset-dashboard-sdk";
import { Layout } from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const id = (uuid as string) || null;
  return (
    <Layout fullwidth>
      {id && (
        <Dashboard
          id={id}
          domain={SUPERSET_DOMAIN}
          dataProvider={dataProvider}
          fullheight
          uiConfig={{
            hideTitle: true,
          }}
        />
      )}
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
export default Post;
