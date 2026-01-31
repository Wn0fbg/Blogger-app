const express = require("express");
const app = express();
const port = 3000;
const client = require("./db/conn.js");
const multer = require("multer");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.json({ message: "Hello world 123" });
});

app.get("/blog", async (req, res) => {
  const result = await client.query("SELECT * from blogs");
  res.json({ data: res.rows });
});

app.post("/blog", async (req, res) => {
  const result = await client.query(
    "INSERT INTO blogs (id, title, image, post, category) VALUES ($1, $2, $3, $4, $5)",
    [
      req.body.id,
      req.body.title,
      req.body.image,
      req.body.post,
      req.body.category,
    ],
  );
  res.json({ message: "Added new blog", desc: result.rowCount });
});

app.post("/blogimage", upload.single("file"), function (req, res, next) {
  res.json(req.file);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
