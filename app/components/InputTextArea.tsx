import React, { Fragment, useState } from "react";
import { ErrorIconFilled } from "./ErrorFilledIcon";

interface InputTextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  formik?: any;
  name: string;
  placeholder?: string;
}

export const InputTextArea: React.FC<InputTextAreaProps> = (props) => {
  const formik = props.formik;
  const name = props.name;
  const placeholder = props.placeholder ? props.placeholder : "";
  const hasError = formik.errors[`${name}`] && formik.touched[`${name}`];

  return (
    <Fragment>
      <div
        className="relative pb-5 flex flex-col items-start justify-center
        w-full mb-1"
      >
        <div className="w-full relative">
          <textarea
            id={name}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values[`${name}`]}
            placeholder={placeholder}
            className={`p-[10px] outline-none rounded border-[1px]
            focus:border-[1px] focus:border-yellow-7 transition-all 
            text-sm w-full h-28 focus:outline-none
            focus:shadow-[0px_0px_0px_4px_rgba(245,159,0,0.3)]
            text-gray-800 bg-white resize-none ${
              hasError ? "border-red-500" : "border-gray-400"
            }`}
          />
        </div>
        {hasError && (
          <p
            className="absolute bottom-2 left-0 text-sms text-red-500
             first-letter:uppercase text-[12px] flex items-center gap-1"
          >
            <ErrorIconFilled className="text-inherit w-4 h-4" />
            <span>{formik.errors[`${name}`]}</span>
          </p>
        )}
      </div>
    </Fragment>
  );
};
