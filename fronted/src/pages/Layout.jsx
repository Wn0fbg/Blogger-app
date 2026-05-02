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
      <div className="flex">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Layout;
