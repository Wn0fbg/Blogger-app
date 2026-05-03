const express = require("express");
const app = express();
const port = 3000;
const client = require("./db/conn.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.get("/blogs", async (req, res) => {
  const result = await client.query("SELECT * from blogs");
  res.json({ data: result.rows[0] });
});

app.post("/blogs", async (req, res) => {
  const result = await client.query(
    "INSERT INTO blogs (id, title, image, post) VALUES ($1, $2, $3, $4)",
    [req.body.id, req.body.title, req.body.image, req.body.post],
  );
  res.json({ message: "Added new blog", desc: result.rowCount });
});

app.listen(port, () => {
  console.log(`Server work in port ${port}`);
});
