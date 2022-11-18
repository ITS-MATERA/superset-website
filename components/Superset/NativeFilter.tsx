import {
  Dashboard,
  DataProviderInterface,
  NativeFilterConfiguration,
} from "superset-dashboard-sdk/build/DataProvider.types";
import React, { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import Select from "react-select";
import classNames from "classnames";
import classes from "./NativeFilter.module.scss";
import { useSupersetContext } from "components/Superset/SupersetContext";

export type NativeFilterProps = {
  filter: NativeFilterConfiguration;
  filters: NativeFilterConfiguration[];
  guestToken: string;
};

const fetchData = async (
  guestToken: string,
  dataProvider: DataProviderInterface,
  filter: NativeFilterConfiguration,
  filters: any
) => {
  const targetColumn = filter.targets[0];
  const data = await dataProvider.fetchChartData(guestToken, {
    datasource: {
      id: targetColumn.datasetId,
      type: "table",
    },
    force: false,
    queries: [
      {
        filters: Object.keys(filters).map((key) => ({
          col: key,
          op: "IN",
          val: filters[key],
        })),
        metrics: [],
        columns: [targetColumn.column.name],
        groupby: [targetColumn.column.name],
        order_desc: true,
        orderby: [[targetColumn.column.name, true]],
        row_limit: 1000,
      },
    ],
  });
  return (
    data?.[0]?.data.map((item) => ({
      label: item[targetColumn.column.name],
      value: item[targetColumn.column.name],
    })) || []
  );
};

const NativeFilter = ({ guestToken, filter, filters }: NativeFilterProps) => {
  const [options, setOptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { dataProvider } = useSupersetContext();
  const { register } = useFormContext();

  const inputProps = register(filter.id);
  const defaultValue = filter?.defaultDataMask?.filterState?.value
    ? filter.defaultDataMask.filterState
    : null;

  const cascadeParentIds = filter?.cascadeParentIds || [];
  const cascadeFilters = useWatch({ name: cascadeParentIds });

  useEffect(() => {
    (async () => {
      if (filter.filterType !== "filter_select") {
        return;
      }
      setIsLoading(true);
      const cascadeFilterValues = Object.entries(cascadeFilters).reduce(
        (cascadeFilterValues, [key, value]) => {
          if (value) {
            const targetFilter = filters[key];
            const target = targetFilter?.targets[0];
            const finalValue = Array.isArray(value)
              ? value
              : [value?.value || value];
            cascadeFilterValues[target.column.name] = finalValue;
          }
          return cascadeFilterValues;
        },
        {}
      );
      const options = await fetchData(
        guestToken,
        dataProvider,
        filter,
        cascadeFilterValues
      );
      setOptions(options);
      setIsLoading(false);
    })();
  }, [filter, filters, guestToken, cascadeFilters]);

  if (filter?.type === "DIVIDER") {
    return (
      <div className="row">
        <div className="col-12">
          <h4>{filter.title}</h4>
          <hr />
          <p> {filter.description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className={classNames("form-group col-12", classes.group)}>
        <label htmlFor={filter.id} className={classes.label}>
          {filter.name}
        </label>
        <Select
          menuPortalTarget={document.body}
          onChange={(value) =>
            inputProps.onChange({
              target: {
                value: Array.isArray(value)
                  ? value.map((v) => v.value)
                  : value?.value || value,
                name: filter.id,
              },
              type: "change",
            })
          }
          onBlur={inputProps.onBlur}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          className={classes.select}
          isMulti={filter.controlValues?.multiSelect}
          isLoading={isLoading}
          options={options}
          defaultValue={defaultValue}
        />
        {filter.description && (
          <small className="form-text">{filter.description}</small>
        )}
      </div>
    </div>
  );
};
export default NativeFilter;
