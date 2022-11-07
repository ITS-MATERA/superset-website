import "bootstrap-italia/dist/css/bootstrap-italia.min.css";

import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
