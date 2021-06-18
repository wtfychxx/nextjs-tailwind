import React, { useEffect, useState } from "react";
import Select from "react-select";

import { useStoreModal } from "../../lib";
import * as Button from "../button/Button";

import { getBookNumber } from "../../api";
import { useStoreOption } from "../../pages/lib/modal";
import { useForm } from "react-hook-form";

export default function BookModal() {
  // zustand initiation
  const { dataId, tipeModalStore } = useStoreModal();
  const { dataGenre } = useStoreOption();

  // prepare a state
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState(null);
  const [releaseYear, setReleaseYear] = useState("");
  const [description, setDescription] = useState("");

  // auto generate code when the modal is showed
  useEffect(() => {
    if (tipeModalStore === "book-add" && dataId === "") {
      (async () => {
        const numberId = await getBookNumber();
        setNumber(numberId);
      })();
    }
  }, [tipeModalStore]);

  // useForm initiation for validation

  const submitHandler = () => {
    console.log(genre.value);
  };

  return (
    <div className="w-full lg:w-1/3">
      <div className="p-4 bg-white shadow rounded-lg">
        <div className="mb-5">
          <label htmlFor="Number" className="block mb-2 text-sm">
            Number
          </label>
          <input
            type="text"
            value={number}
            disabled
            onChange={(e) => setNumber(e.target.value)}
            className="w-10/12 rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Title" className="block mb-2 text-sm">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Genre" className="block mb-2 text-sm">
            Genre
          </label>
          <Select options={dataGenre} value={genre} onChange={setGenre} />
        </div>

        <div className="mb-5">
          <label htmlFor="Title" className="block mb-2 text-sm">
            Author
          </label>
          <input
            type="text"
            name="title"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Release Year" className="block mb-2 text-sm">
            Release Year
          </label>

          <input
            type="text"
            name="title"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Description" className="block mb-2 text-sm">
            Description
          </label>

          <textarea
            cols="30"
            rows="3"
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <Button.primary
          className="justify-end"
          type="submit"
          onClick={(e) => submitHandler()}
        >
          Save
        </Button.primary>
      </div>
    </div>
  );
}
