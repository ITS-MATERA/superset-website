import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import { NextSeo } from "next-seo";
import React from "react";
import Script from "next/script";
import classNames from "classnames";
import classes from "./Layout.module.scss";
import favicon from "../public/favicon.ico";
import { useState } from "react";
import { useTranslation } from "next-i18next";
export type LayoutProps = {
  children: React.ReactNode;
  fullwidth?: boolean;
};

const Layout = ({ children, fullwidth = false }) => {
  const { t: seo } = useTranslation("seo");
  const { t } = useTranslation("common");
  const [password, setPassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordSubmit = () => {
    const correctPassword = "areSSpuglia2023!";
    if (password === correctPassword) {
      setShowDashboard(true);
    } else {
      setError("Password errata");
    }
  };

  return (
    <>
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
              width: "40%",
              padding: "5%",
              border: "1px solid #660b0e",
              borderRadius: "1.5%",
              textAlign: "center",
            }}
          >
            <h6>Inserisci la password per accedere</h6>
            <input
              style={{ border: "1px solid #660b0e", borderRadius: "2px" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{
                marginTop: "3%",
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
          <div style={{ padding: 0, margin: 0, width: "100%", height: "100%" }}>
            <Head>
              <title>{seo("title")}</title>
              <meta name="description" content={seo("description")} />
              <meta name="keywords" content={seo("keywords")} />
              <meta name="author" content={seo("author")} />
              {/** favicon */}
              <link rel="icon" href={favicon.src} />
              <NextSeo title={seo("title")} description={seo("description")} />
            </Head>
            <div>
              <Header title={t("header.top.title")} tag={t("header.top.tag")} />
              <div
                className={classNames(
                  fullwidth ? "container-fluid" : "container",
                  fullwidth && classes.fullwidth
                )}
              >
                {children}
              </div>
            </div>
            <Footer title={t("footer.title")} tag={t("footer.tag")} />
            <Script src="/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js" />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
