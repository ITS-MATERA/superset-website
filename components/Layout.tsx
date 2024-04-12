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
  const [error, setError] = useState("");
  const [loadChart, setLoadChart] = useState(true);

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
                fullwidth
                  ? "container-fluid dash-class"
                  : "container dash-class",
                fullwidth && classes.fullwidth
              )}
            >
              {children}
            </div>
          </div>
          <Footer title={t("footer.title")} tag={t("footer.tag")} />
          <Script src="/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js" />
        </div>
      </div>
    </>
  );
};

export default Layout;
