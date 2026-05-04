import { useState } from "react";
import { uploadFile, createBlog } from "../api/Api";

const Createblog = () => {
  const [value, setValue] = useState("");

  const blankBlog = {
    title: "",
    image: "",
    post: "",
    category: "",
  };

  const [newBlog, setNewBlog] = useState(blankBlog);

  const handleUpdate = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    let uploadedFile = await uploadFile(file);

    if (uploadedFile?.path) {
      setNewBlog({ ...newBlog, image: uploadedFile.path });
    }
  };

  const handleSubmit = async () => {
    let createdBlog = await createBlog(newBlog);
    if (createBlog.desc == 1) {
      setNewBlog(blankBlog);
      alert("Blog added successfuly.");
    } else {
      alert("Failed to create blog");
    }
  };

  const menu = [
    { text: "Nature", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-slate-200 w-[60%] p-5 rounded-2xl">
        <h1 className="text-2xl font-extrabold mb-5">Create blog post</h1>
        <div className="flex flex-col">
          <small>{JSON.stringify(newBlog)}</small>

          <label className="ml-1 text-gray-500">Title</label>
          <input
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            type="text"
            className="h-10 border border-white bg-gray-300 rounded my-2 p-2"
          />

          <label className="ml-1 text-gray-500">Category</label>
          <select
            value={newBlog.category}
            onChange={(e) =>
              setNewBlog({ ...newBlog, category: e.target.value })
            }
            className="h-10 border border-white bg-gray-300 rounded my-2 p-2"
          >
            <option value="" default disabled>
              Select category
            </option>
            {menu.map((item, i) => (
              <option value={item.text} key={i}>
                {item.text}
              </option>
            ))}
          </select>

          <label className="ml-1 text-gray-500">Image</label>
          <input
            onChange={handleUpdate}
            type="file"
            className="border-white bg-gray-300 rounded my-2 p-2"
          />

          <label className="ml-1 text-gray-500">Post</label>
          <textarea
            value={newBlog.post}
            onChange={(e) => {
              setNewBlog({ ...newBlog, post: e.target.value });
            }}
            cols="30"
            rows="2"
            placeholder="write the post"
            className="border-white bg-gray-300 rounded my-2 p-2"
          ></textarea>

          <button
            onClick={() => handleSubmit()}
            className="bg-slate-500 text-white h-8 w-25 mt-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createblog;
