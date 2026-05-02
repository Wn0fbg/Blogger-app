import BlogCard from "../components/Blogcard";

const Home = () => {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet.",
      image:
        "https://plus.unsplash.com/premium_photo-1669312732419-a55959a56e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis.",
      createdon: "2 may, 2026",
      comments: "0",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1777277539243-17e4f2c41aaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis.",
      createdon: "2 may, 2026",
      comments: "0",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1755398105315-a124a12152da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis.",
      createdon: "2 may, 2026",
      comments: "0",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1773655688962-f116b722f1eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis.",
      createdon: "2 may, 2026",
      comments: "0",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1776811805307-a0e0289c672f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis.",
      createdon: "2 may, 2026",
      comments: "0",
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      image:
        "https://images.unsplash.com/photo-1643819029797-e824ef027d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, perferendis.",
      createdon: "2 may, 2026",
      comments: "0",
    },
  ];

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        {data.map((item, i) => {
          return <BlogCard key={i} blogdata={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
