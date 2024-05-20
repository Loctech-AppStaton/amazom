import { Select, SelectItem } from "@nextui-org/react";
import React, { ChangeEvent } from "react";
import CautionIcon from "../src/icons/caution-icon";

interface InputProps {
  isDisabled?: boolean;
  name: string;
  field?: any;
  type?: string;
  label?: string;
  defaultValue?: any;
  placeholder?: string;
  className?: string;
  endContent?: React.JSX.Element;
  selectionMode?: string;
  errors: any;
  lists: { label: string; value: string }[];
  value?: any;
  getValue?: (event: string) => void;
  labelPlacement?: "outside" | "inside" | "outside-left";
  onSelectionChange?: (value: any) => void;
  onChange?: (value: any) => void;
}

export default function SelectField({
  name,
  errors,
  className,
  field,
  label,
  placeholder,
  lists,
  value,
  selectionMode,
  defaultValue,
  labelPlacement = "outside",
  isDisabled,
  onChange,
}: InputProps) {
  return (
    <div className="relative flex flex-col">
      <Select
        isDisabled={isDisabled}
        label={label}
        labelPlacement={labelPlacement}
        className={className}
        defaultSelectedKeys={value ? [`christianity`] : undefined}
        defaultValue={defaultValue}
        selectionMode={selectionMode}
        value={value}
        {...field}
        placeholder={placeholder}
        onChange={onChange}>
        {lists.map((list) => (
          <SelectItem key={list.value} value={list.value}>
            {list.label}
          </SelectItem>
        ))}
      </Select>
      {errors[name] && (
        <span
          className={
            "text-xs text-red-600 transition-transform delay-200 duration-300 ease-in-out " +
            (errors[name].message ? "translate-y-2" : "translate-y-0")
          }>
          <div className="flex flex-row items-center gap-2">
            <CautionIcon size={16} />
            {errors[name].message}
          </div>
        </span>
      )}
    </div>
  );
}
