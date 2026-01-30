// Connection

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "password",
  port: 5432,
});

async function check() {
  await client.connect();
  //   await client.end();
}

check();
module.exports = client;
