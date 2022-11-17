import { FormProvider, useForm, useFormContext } from "react-hook-form";
import React, { useMemo } from "react";

import { Dashboard } from "superset-dashboard-sdk/build/DataProvider.types";
import { DashboardConfig } from "components/Superset/Types";
import NativeFilter from "components/Superset/NativeFilter";
import Spinner from "components/Spinner";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export type NativeFilterPanelProps = {
  config: DashboardConfig;
  dashboard: Dashboard;
  guestToken: string;
  targetPage?: string;
};
const NativeFilterContent = ({
  guestToken,
  dashboard,
  config,
  targetPage = "/dashboard",
}: NativeFilterPanelProps) => {
  const router = useRouter();
  const { t } = useTranslation("superset");
  const nativeFilters = useMemo(
    () => dashboard?.getJsonMetadata()?.native_filter_configuration,
    [dashboard]
  );
  const defaultValues = useMemo(
    () =>
      nativeFilters?.reduce((defaultValues, filter) => {
        if (filter?.defaultDataMask?.filterState?.value) {
          const { value, label } = filter.defaultDataMask.filterState;
          defaultValues[filter.id] = value;
        }
        return defaultValues;
      }, {}),
    [nativeFilters]
  );
  const methods = useForm({ defaultValues });
  const onSubmit = (data) => {
    const filters = Object.entries(data).reduce((filters, [key, value]) => {
      if (value) {
        filters[key] = value;
      }
      return filters;
    }, {});
    router.push(`${targetPage}/${config.slug}?${new URLSearchParams(filters)}`);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h3>{dashboard?.info?.dashboard_title}</h3>
        <hr />
        {nativeFilters?.map((filter) => (
          <NativeFilter
            key={filter.id}
            guestToken={guestToken}
            filter={filter}
          />
        ))}
        <div className="row mt-4">
          <div className="form-group col text-center">
            <button type="submit" className="btn btn-primary">
              {t("native_filters.apply")}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
const NativeFilterPanel = ({
  guestToken,
  dashboard,
  config,
}: NativeFilterPanelProps) => {
  if (!dashboard) {
    return (
      <div className="row justify-content-center">
        <div className="col-4">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <NativeFilterContent
      config={config}
      dashboard={dashboard}
      guestToken={guestToken}
    />
  );
};

export default NativeFilterPanel;
