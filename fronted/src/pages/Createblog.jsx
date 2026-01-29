import { useState } from "react";
import ReactQuil from "react-quill";
import "react-quill/dist/quill.snow.css";

const Createblog = () => {
  const [value, setValue] = useState("");
  const category = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-200 w-[60%] p-5 rounded-xl">
        <h1 className="text-2xl mb-5">Create Blog Post</h1>
        <div className="flex flex-col">
          <label className="mt-1 text-gray-500" htmlFor="">
            Title
          </label>
          <input
            className="h-10 border border-gray-300 rounded my-2 p-2 bg-white"
            type="text"
          />
          <label className="mt-1 text-gray-500" htmlFor="">
            Category
          </label>
          <select
            name=""
            id=""
            className="h-10 border border-gray-300 rounded my-2 p-2 bg-white"
          >
            {category.map((i) => {
              return <option value={i.text}>{i.text}</option>;
            })}
          </select>
          <label className="mt-1 text-gray-500" htmlFor="">
            Post
          </label>
          <ReactQuil
            theme="snow"
            value={value}
            onChange={setValue}
            className="bg-white rounded mb-2 mt-2 editingarea"
          />
          <label className="mt-1 text-gray-500" htmlFor="">
            Blog Image
          </label>
          <input
            type="file"
            className="border-gray-300 rounded my-2 p-2 bg-white"
          />
          <button className="bg-slate-500 text-white h-8 w-25 mt-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createblog;
