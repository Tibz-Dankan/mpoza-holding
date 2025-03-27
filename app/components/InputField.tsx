import React, { Fragment, ReactNode, useState } from "react";
import { EyeIcon } from "./EyeIcon";
import { EyeSlashIcon } from "./EyeSlashIcon";
import { ErrorIconFilled } from "./ErrorFilledIcon";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  formik?: any;
  name: string;
  type: "text" | "password" | "email" | "number" | "date" | "time";
  placeholder?: string;
  label?: ReactNode;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const formik = props.formik;
  const name = props.name;
  const label = props.label ? props.label : "";
  const placeholder = props.placeholder ? props.placeholder : "";

  const isPasswordField: boolean = props.type === "password";
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = () => setShowPassword(() => !showPassword);

  const getFieldType = (): string => {
    if (isPasswordField && showPassword) return "text";
    return props.type;
  };

  const hasError = formik.errors[`${name}`] && formik.touched[`${name}`];

  return (
    <Fragment>
      <div
        className="relative pb-5 flex flex-col items-start  
         justify-center gap-1 w-full text-gray-800 mb-1"
      >
        {label && (
          <label
            className={`text-sm first-letter:uppercase font-[400] mb-1 
            text-gray-600`}
          >
            {label}
          </label>
        )}
        <div className="w-full relative">
          <input
            type={getFieldType()}
            id={name}
            required
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values[`${name}`]}
            placeholder={placeholder}
            className={`p-[10px] outline-none rounded border-[1px]
            focus:border-[1px] focus:border-yellow-700
            transition-all text-sm w-full focus:outline-none
            focus:shadow-[0px_0px_0px_4px_rgba(245,159,0,0.3)]
            text-gray-800 bg-white ${
              hasError ? "border-red-500" : "border-gray-400"
            }`}
          />

          {isPasswordField && (
            <div className="inline-block absolute right-2 top-[7px]">
              {!showPassword && (
                <span
                  className="cursor-pointer"
                  onClick={() => showPasswordHandler()}
                >
                  <EyeIcon className="text-[#868e96]" />
                </span>
              )}
              {showPassword && <EyeSlashIcon className="text-[#868e96]" />}
            </div>
          )}
        </div>
        {hasError && (
          <p
            className="absolute bottom-0 left-0 text-sms text-red-500
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
