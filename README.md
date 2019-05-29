# node-authentication-system
An introduction to authentication with Node.js

## Getting Started

Configure your Sequelize connector to read from process.env

```
const connector = new Sequelize(
  process.env.YOUR_DATABASE_NAME,
  process.env.YOUR_DATABASE_USER,
  process.env.YOUR_DATABASE_PASSWORD,
  {
    host: process.env.YOUR_DATABASE_HOST,
    dialect: YOUR_DATABASE_DIALECT
  }
);
```

### Prerequisites

What things you need to install the software and how to install them

```
sequelize
pg
pg-hstore
dotenv
morgan
ejs
express
express-session
cookie-parser
```

### How To:

To use the examples provided:

```
1. Fork & Clone repo.
2. Run 'npm install' on your local repo so as to get the required dependencies.
3. Run app.js.

```

Have fun :)
