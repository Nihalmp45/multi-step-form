"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MainForm3 = ({defaultValues, saveData}) => {
  const form = useForm({
    mode: "onBlur",
    defaultValues
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log(data)
    saveData(data); // Save the form data to the parent component
    toast.success("Thanks! you can proceed to next steps", {
        position: "top-center"
      });
  };

  return (
    <div className="py-4 flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
      <ToastContainer />
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Main Form
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6"
        >
          {/* Employment Type */}
          <div className="form-control">
            <label
              htmlFor="employmentType"
              className="block text-sm font-medium text-gray-700"
            >
              Employment Type
            </label>
            <select
              id="employmentType"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("employmentType", {
                required: { value: true, message: "Employment type is required" },
              })}
            >
              <option value="">Select employment type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Unemployed">Unemployed</option>
            </select>
            <p className="text-red-500 text-sm mt-1">
              {errors.employmentType?.message}
            </p>
          </div>

          {/* Company Name */}
          <div className="form-control">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("companyName", {
                required: {
                  value: true,
                  message: "Company name is required",
                },
                maxLength: {
                  value: 50,
                  message: "Company name cannot exceed 50 characters",
                },
              })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.companyName?.message}
            </p>
          </div>

          {/* Designation */}
          <div className="form-control">
            <label
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("designation", {
                required: {
                  value: true,
                  message: "Designation is required",
                },
                maxLength: {
                  value: 50,
                  message: "Designation cannot exceed 50 characters",
                },
              })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.designation?.message}
            </p>
          </div>

          {/* Bank Account Number */}
          <div className="form-control">
            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Bank Account Number
            </label>
            <input
              type="number"
              id="accountNumber"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("accountNumber", {
                required: {
                  value: true,
                  message: "Bank account number is required",
                },
                pattern: {
                  value: /^[0-9]{10,18}$/, // Accepts 10 to 18 digits
                  message: "Account number must be between 10 and 18 digits",
                },
              })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.accountNumber?.message}
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={!isDirty || !isValid}
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 disabled:opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default MainForm3;



