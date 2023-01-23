import "styles/globals.scss";

import { configProvider, dataProvider } from "../config";

import { SupersetContextProvider } from "components/Superset";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return (
    <SupersetContextProvider
      dataProvider={dataProvider}
      configProvider={configProvider}
    >
      <Component {...pageProps} />
    </SupersetContextProvider>
  );
};

export default appWithTranslation(App);
