import { Input } from "@nextui-org/react";
import React, { ChangeEvent } from "react";
import CautionIcon from "../src/icons/caution-icon";

interface InputProps {
  name: string;
  field?: any;
  isReadOnly?: any;
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  endContent?: React.JSX.Element;
  errors: any;
  hidden?: boolean;
  classNames?: object;
  style?: object;
  labelPlacement?: "inside" | "outside" | "outside-left";
  defaultValue?: string | number;
  description?: string;
  value?: any;
  disabled?: boolean;
  startContent?: object;
  onClick?: () => void;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
}

export default function InputField({
  name,
  errors,
  className,
  endContent,
  field,
  label,
  placeholder,
  type,
  isReadOnly,
  hidden,
  classNames,
  style,
  labelPlacement = "outside",
  defaultValue,
  description,
  value,
  disabled,
  startContent,
  onClick,
  onChange,
  onValueChange,
}: InputProps) {
  return (
    <div className="relative flex flex-col">
      <Input
        type={type}
        label={label}
        placeholder={placeholder}
        hidden={hidden}
        labelPlacement={labelPlacement}
        onChange={onChange}
        className={`focus:outline-none ${className}`}
        endContent={endContent}
        {...field}
        classNames={classNames}
        style={style}
        defaultValue={defaultValue}
        value={value}
        description={description}
        isDisabled={disabled}
        isReadOnly={isReadOnly}
        startContent={startContent}
        onClick={onClick}
        onValueChange={onValueChange}
      />
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
