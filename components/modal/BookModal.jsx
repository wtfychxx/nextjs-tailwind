import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

import { useStoreModal } from "../../lib";
import * as Button from "../button/Button";

import { getBookNumber } from "../../api";
import { useStoreOption } from "../../pages/lib/modal";

const later = (delay) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};

export default function BookModal() {
  // zustand initiation
  const { dataId, tipeModalStore } = useStoreModal();
  const { dataGenre } = useStoreOption();

  // react-hook-form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    control,
  } = useForm();

  // auto generate code when the modal is showed
  useEffect(() => {
    if (tipeModalStore === "book-add" && dataId === "") {
      (async () => {
        const numberId = await getBookNumber();
        document.querySelector("#bookNumber").value = numberId;
      })();
    }
  }, [tipeModalStore]);

  const submitHandler = (data) => {
    console.log(data);
    // await later(30000);
  };

  const changeNumber = (e) => {
    e.preventDefault();
    const elementId = document.getElementById("bookNumber");

    elementId.removeAttribute("readonly");
  };

  console.log(errors);

  return (
    <form className="w-full lg:w-1/3" onSubmit={handleSubmit(submitHandler)}>
      <div className="p-4 bg-white shadow rounded-lg">
        <div className="mb-5">
          <label htmlFor="Number" className="block mb-2 text-sm">
            Number
          </label>
          <div className="flex items-center justify-between">
            <input
              {...register("bookNumber", {
                required: "Book Number is required",
              })}
              type="text"
              id="bookNumber"
              readOnly
              className={`w-10/12 rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 ${
                errors.bookNumber
                  ? "focus:border-red-500 focus:ring-red-100"
                  : "focus:border-blue-500 focus:ring-blue-100"
              }`}
            />
            <a
              className="w-2/12 text-center text-blue-400"
              href=""
              onClick={changeNumber}
            >
              Change
            </a>
          </div>
          <span className="flex items-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${errors.bookNumber ? "" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            &nbsp;
            {errors.bookNumber &&
              errors.bookNumber.type == "required" &&
              errors.bookNumber.message}
          </span>
        </div>

        <div className="mb-5">
          <label htmlFor="Title" className="block mb-2 text-sm">
            Title
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Title is required",
              min: 4,
            })}
            className={`w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 ${
              errors.title
                ? "focus:border-red-500 focus:ring-red-100"
                : "focus:border-blue-500 focus:ring-blue-100"
            }`}
          />
          <span className="flex items-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${errors.title ? "" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            &nbsp;
            {errors.title &&
              errors.title.type == "required" &&
              errors.title.message}
          </span>
        </div>

        <div className="mb-5">
          <label htmlFor="Genre" className="block mb-2 text-sm">
            Genre
          </label>

          <Controller
            name="genre"
            control={control}
            render={({ field }) => <Select {...field} options={dataGenre} />}
            rules={{ required: "Genre is required" }}
          />
          <span className="flex items-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${errors.genre ? "" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            &nbsp;
            {errors.genre &&
              errors.genre.type == "required" &&
              errors.genre.message}
          </span>
        </div>

        <div className="mb-5">
          <label htmlFor="Title" className="block mb-2 text-sm">
            Author
          </label>
          <input
            {...register("author", {
              required: "Author is required!",
            })}
            type="text"
            className={`w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 ${
              errors.title
                ? "focus:border-red-500 focus:ring-red-100"
                : "focus:border-blue-500 focus:ring-blue-100"
            }`}
          />
          <span className="flex items-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${errors.author ? "" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            &nbsp;
            {errors.author &&
              errors.author.type == "required" &&
              errors.author.message}
          </span>
        </div>

        <div className="mb-5">
          <label htmlFor="Release Year" className="block mb-2 text-sm">
            Release Year
          </label>

          <input
            type="text"
            name="title"
            className={`w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 ${
              errors.title
                ? "focus:border-red-500 focus:ring-red-100"
                : "focus:border-blue-500 focus:ring-blue-100"
            }`}
            {...register("releaseYear", {
              required: "Release Year is required!",
            })}
          />
          <span className="flex items-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${errors.releaseYear ? "" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            &nbsp;
            {errors.releaseYear &&
              errors.releaseYear.type == "required" &&
              errors.releaseYear.message}
          </span>
        </div>
        <div className="mb-5">
          <label htmlFor="Description" className="block mb-2 text-sm">
            Description
          </label>

          <textarea
            cols="30"
            rows="3"
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
            {...register("description")}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button.danger
            className="w-24"
            type="submit"
            disabled={formState.isSubmitting}
          >
            Save
          </Button.danger>
        </div>
      </div>
    </form>
  );
}
