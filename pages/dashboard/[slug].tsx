import Breadcrumbs from "components/Breadcrumbs";
import DashboardItem from "components/DashboardItem";
import { Layout } from "components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useConfig } from "components/Superset";
import { useMemo } from "react";
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
      return config.dashboards.map((d) => d.slug);
    }
    return [config.slug];
  }, [config]);
  console.info("dashboards", dashboards);
  return (
    <Layout fullwidth>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {dashboards.map((id) => (
        <DashboardItem key={id} id={id} router={router} />
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
