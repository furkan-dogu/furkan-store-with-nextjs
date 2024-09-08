"use client";

import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ search, setSearch }) => {

  return (
    <div>
      <div className="relative w-11/12 sm:w-1/2 mx-auto">
        <div className="absolute left-0 pl-3 inset-y-0 flex items-center pointer-events-none">
          <IoIosSearch className="text-2xl text-gray-400" />
        </div>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search products..."
            className="block border border-gray-300 rounded-lg p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 focus:border-gray-900 outline-none"
            value={search}
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
