import React from "react";
import { InputField } from "./InputField";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";

type TNewsLetter = {
  email: string;
};

export const NewsLetter: React.FC = () => {
  const { isPending, mutate } = useMutation({
    //   mutationFn: post email subscription api here ,
    onSuccess: async (response: any) => {
      console.log("post response: ", response);
    },
    onError: (error: any) => {
      console.log("post error: ", error);
    },
  });

  const initialValues: TNewsLetter = {
    email: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string().max(255).required("Email is required"),
    }),

    onSubmit: async (values, helpers) => {
      try {
        //   mutate(values);
      } catch (err: any) {
        console.error(err);
      }
    },
  });

  return (
    <div
      className="w-full bg-white py-4 px-6 pb-6 rounded-md shadow
       space-y-4"
    >
      <p className="text-xl font-medium italic font-serif text-center">
        Subscribe To our NewsLetter
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-0 items-center justify-center w-full"
      >
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          formik={formik}
        />
        <Button
          label={
            <>
              {!isPending && <span>Subscribe</span>}
              {isPending && <span>Subscribing...</span>}
            </>
          }
          type="submit"
          disabled={isPending}
          className="w-fulls text-base py-2 rounded"
        />
      </form>
    </div>
  );
};
