import React, { useMemo } from "react";

import classNames from "classnames";
import classes from "./Spinner.module.scss";
import { useTranslation } from "next-i18next";

export type SpinnerProps = {
  fit?: boolean;
};
const Spinner = ({ fit = true }: SpinnerProps) => {
  const { t } = useTranslation("common");
  const component = useMemo(
    () => (
      <div className="progress-spinner progress-spinner-active">
        <span className="visually-hidden">{t("loading")}</span>
      </div>
    ),
    [t]
  );
  if (fit) {
    return (
      <div className={classNames("row justify-content-center", classes.fit)}>
        <div className="col-2 text-center">{component}</div>
      </div>
    );
  }
  return component;
};
export default Spinner;
