import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchdata = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchdata(value);
  };

  return (
    <div class="grid grid-cols-2 gap-4 mt-5">
      <div>
        <div className="mt-20 text-center text-5xl font-bold text-gray-900 leading-8">
          <h1 className="-ml-16">
            Find{" "}
            <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              Partners
            </span>{" "}
            (CAs)
          </h1>
          <br />
          <h1 className="-ml-40">available online</h1>
        </div>
        <div className="text-left mt-5 ml-20">
          <h2>
            <span className="font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </h2>
        </div>
        <form class="flex items-center mt-7 -ml-40">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative w-84">
            <input
              type="text"
              class="ml-44 bg-gray-50 border border-gray-300 text-black text-sm ml-60 focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by name"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            onClick={() => onSearch(value)}
            class="inline-flex items-center py-2.5 px-3 ml-2 mr-96 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-3 mt-28 ">
        <img src="Picture (3).png" className="" />
        <img src="Picture (1).png" className="-mt-24" />
        <img src="Picture (2).png" className="-mt-16" />
      </div>
    </div>
  );
};

export default SearchBar;
