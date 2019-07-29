[![Build Status](https://travis-ci.org/re-plate/backend.svg?branch=master)](https://travis-ci.org/re-plate/backend)
[![Coverage Status](https://coveralls.io/repos/github/re-plate/backend/badge.svg?branch=develop)](https://coveralls.io/github/re-plate/backend?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/db6e138ab94fed11b5ba/maintainability)](https://codeclimate.com/github/re-plate/backend/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/re-plate/backend/blob/develop/LICENSE)

# backend
API Service for replate application 🚀.

> Link to API: https://re-plate.herokuapp.com/

# How to setup the project

- Create an account on [ElephantSQl](https://customer.elephantsql.com/instance)
- Create a database instance in ElephantSQL and copy the connection string (URL)
- create a `.env` file at the root of the project, copy the content of `.env.example` into it.
- Assign the URL above to the `DB_URL` in `.env` file
- npm install or yarn install
- npm migrate or yarn migrate
- npm run dev or yarn dev



<pre>
<h3>Register Route </h3>
<code>
Access: Public
Method: POST
Route: /api/v1/auth/register
Payload: {
    name: STRING,
    username: STRING,
    email: STRING,
    password: STRING
    type: INTEGER,
}
</code>
</pre>
