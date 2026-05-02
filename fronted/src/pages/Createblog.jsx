const Createblog = () => {
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
          <label className="ml-1 text-gray-500">Title</label>
          <input
            type="text"
            className="h-10 border border-white bg-gray-300 rounded my-2 p-2"
          />

          <label className="ml-1 text-gray-500">Category</label>
          <select className="h-10 border border-white bg-gray-300 rounded my-2 p-2">
            {menu.map((item, i) => {
              return (
                <option value={item.text} key={i}>
                  {item.text}
                </option>
              );
            })}
          </select>

          <label className="ml-1 text-gray-500">Image</label>
          <input
            type="file"
            className="border-white bg-gray-300 rounded my-2 p-2"
          />

          <label className="ml-1 text-gray-500">Post</label>
          <textarea
            cols="30"
            rows="2"
            placeholder="write the post"
            className="border-white bg-gray-300 rounded my-2 p-2"
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
