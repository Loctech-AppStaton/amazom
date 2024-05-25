"use client";
import Image from "next/image";
import React from "react";
import { phones } from "@/constants";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import SelectField from "../../../../../components/select-field";

export default function Iphone14ProMax() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const schema = yup.object({
    phones: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      phones: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: object) => {
    setIsLoading(true);
  };

  return (
    <div className="mx-auto max-w-[1300px] w-full min-h-screen md:px-0 px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="b bg-slate-100 w-full lg:px-20 px-4 py-10 my-10 lg:ml-3 ml-0">
        <h1 className="text-2xl">Iphone 15 pro max prices</h1>
        <p className="text-slate-400 font-extralight text-xs">
          TO ENJOY 35% DISCOUNT N175,000 (CURRENT PROMO PRICE)
        </p>
        <div className="py-4 md:space-y-6 space-y-4">
          <Controller
            name="phones"
            control={control}
            render={({ field }) => (
              <SelectField
                name="phones"
                errors={errors}
                field={field}
                lists={phones}
                placeholder="1 Piece of Iphone 14 Pro Max (Android Version) : N175,000"
                onChange={field.onChange}
              />
            )}
          />

          <Button
            size="lg"
            className="self-end mt-10 bg-[#041E42] text-white px-8 py-4"
            color="primary"
            isLoading={isLoading}
            type="submit"
            spinnerPlacement="end">
            {isLoading ? "Submitting" : "Submit"}
          </Button>
        </div>
      </form>
      <div className="flex justify-center items-center">
        <Image
          src="/images/cash-on-delivery.png"
          alt="cash-on-delivery-image"
          width={200}
          height={200}
          className="w-60 h-60 object-cover"
        />
      </div>
    </div>
  );
}
