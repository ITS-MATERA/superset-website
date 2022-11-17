import React from "react";
import { SUPERSET_DOMAIN } from "config";
import { useTranslation } from "next-i18next";

const AccessTopWrapper = ({
  link = `${SUPERSET_DOMAIN}`,
}: {
  link?: string;
}) => {
  const { t } = useTranslation("common");

  return (
    <div className="it-access-top-wrapper">
      <a className="btn btn-primary btn-sm" href={link}>
        {t("header.top.login")}
      </a>
    </div>
  );
};

export default AccessTopWrapper;
