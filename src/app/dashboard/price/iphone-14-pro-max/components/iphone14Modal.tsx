"use client";
import Image from "next/image";
import React from "react";
import { phones } from "@/constants";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../../../../../components/input-field";
import SelectField from "../../../../../../components/select-field";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  ModalProps,
} from "@nextui-org/react";
import { PlusIcon } from "lucide-react";

export default function Iphone14Modal() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior] =
    React.useState<ModalProps["scrollBehavior"]>("outside");

  const schema = yup.object({
    phones: yup.string().required(),
    price: yup.number().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      phones: "",
      price: 0,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: object) => {
    setIsLoading(true);
  };

  return (
    <>
      <Button
        endContent={<PlusIcon />}
        className=" rounded-full p-5 bg-[#e09a37] text-white"
        onPress={onOpen}>
        Add
      </Button>
      <Modal
        scrollBehavior={scrollBehavior}
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        size="2xl"
        className="flex items-center justify-center self-center">
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                fill the form below
              </ModalHeader> */}
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className=" w-full lg:px-20 px-4 py-10 my-10 lg:ml-3 ml-0">
                  <h1 className="text-2xl">Iphone 14 pro max prices</h1>
                  <p className="text-slate-400 font-extralight text-xs">
                    TO ENJOY 35% DISCOUNT N175,000 (CURRENT PROMO PRICE)
                  </p>
                  <div className="py-4 md:space-y-6 space-y-4">
                    <Controller
                      name="price"
                      control={control}
                      render={({ field }) => (
                        <InputField
                          defaultValue={field.value}
                          name="price"
                          field={field}
                          errors={errors}
                          placeholder="Enter Price"
                          type="number"
                        />
                      )}
                    />
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
                      className="self-end mt-10 bg-[#e09a37] text-white px-8 py-4"
                      color="primary"
                      isLoading={isLoading}
                      type="submit"
                      spinnerPlacement="end">
                      {isLoading ? "Submitting" : "Submit"}
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
