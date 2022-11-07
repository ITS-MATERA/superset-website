import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import Script from "next/script";
import classes from "./Layout.module.scss";
import classnames from "classnames";
export type LayoutProps = {
  children: React.ReactNode;
  fullwidth?: boolean;
};
const Layout = ({ children, fullwidth = false }) => {
  return (
    <>
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
      <Script src="bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js" />
    </>
  );
};

export default Layout;
