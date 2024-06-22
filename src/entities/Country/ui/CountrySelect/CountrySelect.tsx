import clx from "classnames";
import React from "react";
import { Country } from "../../model/types/CountrySchema";
import Select from "../../../../shared/ui/Select/Select";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
  placeholderValue?: string;
}

const options = [
  { value: Country.Belarus, content: "Belarus" },
  { value: Country.Russia, content: "Russia" },
  { value: Country.UnitedStates, content: "United States" },
  { value: Country.Germany, content: "Germany" },
  { value: Country.Japan, content: "Japan" },
  { value: Country.France, content: "France" },
  { value: Country.UnitedKingdom, content: "United Kingdom" },
  { value: Country.Canada, content: "Canada" },
  { value: Country.Australia, content: "Australia" },
  { value: Country.Sweden, content: "Sweden" },
  { value: Country.Switzerland, content: "Switzerland" },
  { value: Country.Netherlands, content: "Netherlands" },
];

export const CountrySelect = React.memo(
  ({ className, value, onChange, readonly, placeholderValue }: CountrySelectProps) => {
    const onChangeHandler = React.useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <>
        {placeholderValue && <div style={{ margin: "10px 0px 10px 0px" }}>{placeholderValue}</div>}
        <Select
          className={clx("", {}, [className])}
          label={"Укажите страну"}
          options={options}
          value={value}
          onChange={onChangeHandler}
          readonly={readonly}
        />
      </>
    );
  }
);
