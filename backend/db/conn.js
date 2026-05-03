const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "12345678",
  port: 5432,
});

async function check() {
  await client.connect();
//   const result = await client.query("SELECT * from blogs");
//   console.log(result.rows[0]);
//   await client.end();
}

check();
module.exports = client;
