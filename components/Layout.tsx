import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import { NextSeo } from "next-seo";
import React from "react";
import Script from "next/script";
import classes from "./Layout.module.scss";
import classnames from "classnames";
import { useTranslation } from "next-i18next";
export type LayoutProps = {
  children: React.ReactNode;
  fullwidth?: boolean;
};
const Layout = ({ children, fullwidth = false }) => {
  const { t: seo } = useTranslation("seo");
  return (
    <>
      <Head>
        <title>{seo("title")}</title>
        <NextSeo title={seo("title")} description={seo("description")} />
      </Head>
      <div>
        <Header />
        <div
          className={classnames(
            "container",
            fullwidth ? classes.fullwidth : "my-2"
          )}
        >
          {children}
        </div>
      </div>
      <Footer title="Superset" tag="Data Explorer" />
      <Script src="/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js" />
    </>
  );
};

export default Layout;
