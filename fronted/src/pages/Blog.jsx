const Blog = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[60%] overflow-hidden">
        <h1 className="mt-1 text-4xl font-extrabold">
          Lorem ipsum dolor sit amet.
        </h1>

        <div className="flex mt-4 mb-4">
          <small>2 may, 2026</small>
        </div>
        <img
          src="https://images.unsplash.com/photo-1777026050794-a5e4ef7cd254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="rounded-lg"
        />
        <div>
          <h2 className="text-2xl mt-2 mb-2">Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex
            aperiam magnam, vel molestias voluptates ut cum non numquam saepe
            veritatis aliquid fuga natus accusantium fugit nihil provident a.
            Eveniet a tempore dolores ea accusamus. Impedit fuga necessitatibus
            quia mollitia? Ullam corporis ipsum ex illo molestiae quo totam
            rerum ducimus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
