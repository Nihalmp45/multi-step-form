"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainForm2 = ({ defaultValues, saveData }) => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log(data);
    saveData(data); // Save the form data to the parent component
    toast.success("Thanks! you can proceed to next steps", {
      position: "top-center",
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
          {/* Country */}
          <div className="form-control">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("country", {
                required: { value: true, message: "Country is required" },
              })}
            >
              <option value="">Select a country</option>
              <option value="USA">United States</option>
              <option value="India">India</option>
              <option value="UK">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
            <p className="text-red-500 text-sm mt-1">
              {errors.country?.message}
            </p>
          </div>

          {/* Address */}
          <div className="form-control">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("address", {
                required: { value: true, message: "Address is required" },
                maxLength: {
                  value: 100,
                  message: "Address cannot exceed 100 characters",
                },
              })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.address?.message}
            </p>
          </div>

          {/* Government ID Upload */}
          <div className="form-control">
            <label
              htmlFor="idType"
              className="block text-sm font-medium text-gray-700"
            >
              Select ID Type
            </label>
            <select
              id="idType"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("idType", {
                required: { value: true, message: "ID Type is required" },
              })}
            >
              <option value="">Select an ID type</option>
              <option value="PAN">PAN Card</option>
              <option value="Passport">Passport</option>
              <option value="DrivingLicense">Driving License</option>
            </select>
            <p className="text-red-500 text-sm mt-1">
              {errors.idType?.message}
            </p>
          </div>

          {/* File Upload */}
          {/* File Upload */}
          <div className="form-control">
            <label
              htmlFor="govId"
              className="block text-sm font-medium text-gray-700"
            >
              Upload ID
            </label>
            <input
              type="file"
              id="govId"
              accept=".jpg,.jpeg,.png,.pdf"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...register("govId", {
                required: { value: true, message: "Government ID is required" },
                validate: {
                  fileType: (files) =>
                    files?.[0]?.type.match(/image\/(jpeg|png)|application\/pdf/)
                      ? true
                      : "File must be an image (jpeg/png) or a PDF",
                  fileSize: (files) =>
                    files?.[0]?.size <= 2 * 1024 * 1024
                      ? true
                      : "File size must not exceed 2MB",
                },
              })}
            />
            {/* Display error message */}
            <p className="text-red-500 text-sm mt-1">
              {errors.govId?.message ||
                (errors.govId?.type === "fileType" && "Invalid file type")}
            </p>

            {/* Display file name if uploaded */}
            {form.getValues("govId") && form.getValues("govId")[0]?.name && (
              <p className="text-sm text-gray-600 mt-2">
                Uploaded file: {form.getValues("govId")[0]?.name}
              </p>
            )}
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

export default MainForm2;
