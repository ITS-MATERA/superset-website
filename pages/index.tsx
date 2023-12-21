import { SUPERSET_DOMAIN, configProvider, dataProvider } from "../config";

import { Dashboard } from "superset-dashboard-sdk";
import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

const Index = () => {
  const homeDashboard = configProvider.getHomePageDashboardConfig();
  const [password, setPassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordSubmit = () => {
    const correctPassword = "AReSSits2023!";
    if (password === correctPassword) {
      setShowDashboard(true);
    } else {
      setError("Password errata");
    }
  };

  return (
    <Layout fullwidth>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {!showDashboard ? (
          <div
            style={{
              width: "300px",
              padding: "20px",
              border: "1px solid #660b0e",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <h2>Inserisci la password per accedere</h2>
            <input
              style={{ border: "1px solid #660b0e", borderRadius: "2px" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{
                background: "#660b0e",
                color: "white",
                borderRadius: "2px",
              }}
              onClick={handlePasswordSubmit}
            >
              Accedi
            </button>
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

export default Index;
