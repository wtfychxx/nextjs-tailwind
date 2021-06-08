import React, { useEffect, useState } from "react";
import Select from "react-select";

import { useStoreModal } from "../../lib";

import { getBookNumber } from "../../api";

export default function BookModal() {
  const { dataId, tipeModalStore } = useStoreModal();
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (tipeModalStore === "book-add") {
      (async () => {
        const numberId = await getBookNumber();
        setNumber(numberId);
      })();
    }
  }, [tipeModalStore]);

  return (
    <div className="w-full lg:w-1/3">
      <div className="p-4 bg-white shadow rounded-lg">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm">
            Number
          </label>
          <input
            type="text"
            value={number}
            disabled
            onChange={(e) => setNumber(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm">
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
          <label htmlFor="email" className="block mb-2 text-sm">
            Genre
          </label>
          <input
            type="text"
            name="title"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm">
            Title
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
          <label htmlFor="email" className="block mb-2 text-sm">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
