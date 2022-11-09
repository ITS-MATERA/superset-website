import { SUPERSET_DOMAIN, dataProvider } from "../../config";

import { Dashboard } from "superset-dashboard";
import { Layout } from "../../components";
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
        />
      )}
    </Layout>
  );
};

export default Post;
