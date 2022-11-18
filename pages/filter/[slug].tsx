import { Layout } from "components";
import { NativeFilterPanel } from "components/Superset";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useDashboard from "components/Superset/useDashboard";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { slug } = router.query;
  const id = (slug as string) || null;
  const { config, dashboard, guestToken } = useDashboard({ id });

  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-3">
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
