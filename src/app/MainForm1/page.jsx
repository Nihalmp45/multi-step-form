"use client"
import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainForm1 = ({ defaultValues, saveData }) => {
  const form = useForm({
    mode: "onChange", // Ensure validation triggers on every change
    defaultValues,
  });

  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;

  // Reset form when defaultValues change (for example, when navigating back to this step)
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues); // Reset form to the new default values when returning to this step
    }
  }, [defaultValues, reset]);

  const onSubmit = (data) => {
    console.log(data);
    saveData(data); // Save the form data to the parent component
    toast.success("Thanks! you can proceed to next steps", {
      position: "top-center",
    });
  };

  return (
    <>
      <div className="py-4 flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <ToastContainer />
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Personal Information
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <div className="form-control">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("username", {
                  required: "Username is necessary",
                  maxLength: {
                    value: 15,
                    message: "Username cannot exceed 15 characters",
                  },
                })}
              />
              <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Primary Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("phoneNumber.0", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber?.[0]?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                {...register("dob", {
                  required: "Date of Birth is required",
                })}
              />
              <p className="text-red-500 text-sm mt-1">{errors.dob?.message}</p>
            </div>

            <button
              type="submit"
              disabled={!isValid} // Disable when form is invalid
              className={`px-4 py-2 rounded ${
                isValid ? "bg-indigo-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};

export default MainForm1;



