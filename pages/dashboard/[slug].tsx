import { Dashboard } from "superset-dashboard-sdk";
import { Layout } from "components";
import { SUPERSET_DOMAIN } from "config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useSupersetContext } from "components/Superset/SupersetContext";

export default () => {
  const router = useRouter();
  const { slug } = router.query;
  const id = (slug as string) || null;
  const { dataProvider, configProvider } = useSupersetContext();
  const config = configProvider.getDashboardConfigBySlug(id);
  return (
    <Layout fullwidth>
      {id && (
        <Dashboard
          uuid={config.uuid}
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
