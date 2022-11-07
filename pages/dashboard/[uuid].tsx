import { Dashboard } from "superset-dashboard";
import { Layout } from "../../components";
import { dataProvider } from "../../config";
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
          domain="http://localhost:8088"
          dataProvider={dataProvider}
          fullheight
        />
      )}
    </Layout>
  );
};

export default Post;
