import {
  Dashboard,
  NativeFilterConfiguration,
} from "superset-dashboard-sdk/build/DataProvider.types";
import React, { useEffect, useState } from "react";

import Select from "react-select";
import classNames from "classnames";
import classes from "./NativeFilter.module.scss";
import { useFormContext } from "react-hook-form";
import { useSupersetContext } from "components/Superset/SupersetContext";

export type NativeFilterProps = {
  filter: NativeFilterConfiguration;
  guestToken: string;
};
const NativeFilter = ({ guestToken, filter }: NativeFilterProps) => {
  const [options, setOptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { dataProvider } = useSupersetContext();
  const { register } = useFormContext();

  const inputProps = register(filter.id);
  const defaultValue = filter?.defaultDataMask?.filterState?.value
    ? filter.defaultDataMask.filterState
    : null;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const targetColumn = filter.targets[0];
      const data = await dataProvider.fetchChartData(guestToken, {
        datasource: {
          id: targetColumn.datasetId,
          type: "table",
        },
        force: false,
        queries: [
          {
            metrics: [],
            columns: [targetColumn.column.name],
            groupby: [targetColumn.column.name],
            order_desc: true,
            orderby: [[targetColumn.column.name, true]],
            row_limit: 1000,
          },
        ],
      });
      setOptions(
        data?.[0]?.data.map((item) => ({
          label: item[targetColumn.column.name],
          value: item[targetColumn.column.name],
        }))
      );
      setIsLoading(false);
    })();
  }, [filter, guestToken]);
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
                value: Array.isArray(value) ? value.map((v) => v.value) : value,
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
      </div>
    </div>
  );
};
export default NativeFilter;
