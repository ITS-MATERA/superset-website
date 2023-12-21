import { SUPERSET_DOMAIN, configProvider, dataProvider } from "../config";

import { Dashboard } from "superset-dashboard-sdk";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react"; // new line

const Index = () => {
  const homeDashboard = configProvider.getHomePageDashboardConfig();
  const [password, setPassword] = useState(""); // new line
  const [showDashboard, setShowDashboard] = useState(false); // new line
  const [error, setError] = useState(""); // new line

  const handlePasswordSubmit = () => {
    //new function
    const correctPassword = "AReSSits2023!";
    if (password === correctPassword) {
      setShowDashboard(true);
    } else {
      setError("Password errata");
    }
  };

  return (
    <Layout fullwidth>
      {!showDashboard ? ( // new condition for true
        <div>
          <h2>Inserisci la password per accedere</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Accedi</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      ) : (
        <Dashboard
          uuid={homeDashboard.uuid}
          domain={SUPERSET_DOMAIN}
          dataProvider={dataProvider}
          fullheight
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

export default Index;
