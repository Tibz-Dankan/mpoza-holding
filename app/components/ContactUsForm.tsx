import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { InputField } from "./InputField";
import { InputTextArea } from "./InputTextArea";
import Button from "./Button";
import { Triangle } from "./Triangle";

type TContactMessage = {
  fullname: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const ContactUsForm: React.FC = () => {
  const { isPending, mutate } = useMutation({
    //   mutationFn: post contact messages api here ,
    onSuccess: async (response: any) => {
      console.log("post response: ", response);
    },
    onError: (error: any) => {
      console.log("post error: ", error);
    },
  });

  const initialValues: TContactMessage = {
    fullname: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      fullname: Yup.string().max(255).required("Fullname is required"),
      email: Yup.string().max(255).required("Email is required"),
      phoneNumber: Yup.string().max(255).required("Phone number is required"),
      message: Yup.string().max(255).required("Message is required"),
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
      className="rounded-b-md bg-white w-full sm:w-96
        shadow relative -top-6 flex flex-col gap-2"
    >
      <div className="w-full left-0 top-0 flex items-center justify-between">
        <Triangle className="rotate-[-90deg]" />
        <p className="text-2xl font-medium italic font-serif text-center">
          Let's Talk
        </p>
        <Triangle />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-0 items-center w-full sm:w-96 p-5"
      >
        <InputField
          type="text"
          name="fullname"
          placeholder="Full Names"
          formik={formik}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          formik={formik}
        />
        <InputField
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          formik={formik}
        />
        <InputTextArea name="message" placeholder="Message" formik={formik} />
        <Button
          label={
            <>
              {!isPending && <span>Send</span>}
              {isPending && <span>Sending...</span>}
            </>
          }
          type="submit"
          disabled={isPending}
          className="w-full"
        />
      </form>
    </div>
  );
};
