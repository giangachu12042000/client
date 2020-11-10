import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <div className="flex md:flex-row-reverse flex-wrap">
        <div className="w-full md:w-3/4 bg-gray-500">
          <div className="flex py-2">
            <input
              type="text"
              className="h-10 block text-gray-700 mb-2 py-3 w-full rounded-lg"
              placeholder="search"
            />
            <input
              className="h-10 rounded-lg flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white px-2 mx-1"
              type="button"
              value="submit"
            />
          </div>
          <ul className="list-none flex m-0">
            <li className="flex-1 text-center py-2 m-2 ">
              <Link className="text-white hover:underline" to="/category">
                cate1
              </Link>
            </li>
            <li className="flex-1 text-center py-2 m-2 ">
              <Link className="text-white hover:underline" to="/category">
                cate1
              </Link>
            </li>
            <li className="flex-1 text-center py-2 m-2 ">
              <Link className="text-white hover:underline" to="/category">
                cate1
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Menu;
