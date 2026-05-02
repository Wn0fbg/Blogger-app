import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const menu = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="border-b">
        <div className="container px-5 py-5 flex justify-between">
          <span className="font-extrabold text-2xl">Blogger</span>
          <div className="flex">
            <ul className="flex">
              {menu.map((item, i) => {
                return (
                  <li>
                    <Link className="p-2 flex justify-center items-center">
                      <span>{item.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="bg-slate-500 text-white px-2 py-1 rounded">
              <Link>+ New Post</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex mx-auto px-5 md:px-20">
        <div className="mt-5 mb-5 min-h-162.5 w-full">
          <Outlet></Outlet>
        </div>
      </div>

      {/* Footer */}
      <div className="flex bg-slate-800">
        <div className="flex mx-auto px-20 py-20  items-center justify-center">
          <h3 className="text-gray-400 text-2xl">Blogger</h3>
        </div>
      </div>
    </div>
  );
};

export default Layout;
