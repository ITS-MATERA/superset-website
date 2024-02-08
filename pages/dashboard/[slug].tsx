import { useMemo, useState } from "react";

import Breadcrumbs from "components/Breadcrumbs";
import DashboardItem from "components/DashboardItem";
import { Layout } from "components";
import { LoadingIndicator } from "react-select/dist/declarations/src/components/indicators";
import Spinner from "components/Spinner";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useConfig } from "components/Superset";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { slug } = router.query;
  const id = (slug as string) || null;
  const config = useConfig({ id });
  const breadcrumbs = useMemo(() => {
    const items = ["Dashboard", config.menu, config.section, config.name];
    const filters = items.filter((item) => item !== undefined);
    return filters.map((item, index) => ({
      label: item,
      active: index === filters.length - 1,
    }));
  }, [config]);
  const dashboards = useMemo<string[]>(() => {
    if (config.type === "group") {
      return config.dashboards;
    }
    return [config.slug];
  }, [config]);
  const [loaded, setLoaded] = useState({});
  const [load, setLoad] = useState(false);
  const onLoad = (id: string) => {
    setLoaded({ ...loaded, [id]: true });
  };
  const isLoading =
    Object.keys(loaded).length !== dashboards.length && dashboards.length > 1;

  const allLoaded = () => {
    if (document.getElementsByClassName("loadingoverlay")) {
      console.log("All loaded in react app");
      setLoad(true);
    }
  };
  return (
    <Layout fullwidth>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {isLoading && <Spinner /> && allLoaded}
      {dashboards.map((id) => (
        <DashboardItem
          key={id}
          id={id}
          router={router}
          onLoad={onLoad}
          showLoading={dashboards.length === 1}
        />
      ))}
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
