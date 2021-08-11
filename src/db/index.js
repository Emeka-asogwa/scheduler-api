const pg = require("pg");
const client = new pg.Client({
  user: 'testdd',
  host: 'localhost',
  database: `scheduler_${process.env.NODE_ENV || "development"}`,
  password: 'testdd',
  port: 5432,
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
