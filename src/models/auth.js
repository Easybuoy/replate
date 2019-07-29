import db from '../data/db';

const insert = userData => db('users')
  .insert(userData)
  .returning('*');

const getByUsername = username => db('users')
  .where({ username })
  .first();

const getByEmail = email => db('users')
  .where({ email })
  .first();

const getById = id => db('users')
  .where({ id })
  .first();

export {
  insert, getByUsername, getByEmail, getById,
};
