require("dotenv").config();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  SESSION_COOKIE,
  SESSION_SECRET,
  PORT,
} = process.env;

module.exports = {
  /* Database configs */
  dbName: DB_NAME,
  dbUser: DB_USER,
  dbPassword: DB_PASSWORD,
  dbHost: DB_HOST,

  /* Session configs */
  sessionCookie: SESSION_COOKIE,
  sessionSecret: SESSION_SECRET,

  /* Port configs*/
  port: PORT,
};
