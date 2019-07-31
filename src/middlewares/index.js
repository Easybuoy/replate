import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { getById } from '../models/auth';

dotenv.config();

const validateInput = validationMethod => (req, res, next) => {
  const { errors, isValid } = validationMethod(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json({ status: 'error', errors });
  }

  next();
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .json({ status: 'error', message: 'No Token Provided' });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    if (data) {
      req.user_id = data.id;
      req.type = data.type;
      const existingUser = await getById(req.user_id);
      if (!existingUser) {
        return res
          .status(404)
          .json({ status: 'error', message: 'User Not Found' });
      }
      next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ status: 'error', message: 'Invalid Token Provided' });
  }
};

const isBusiness = async (req, res, next) => {
  if (req.type !== 1) {
    return res.status(403).json({
      status: 'error',
      message: 'You are not allowed to perform this action',
    });
  }
  return next();
};

const isVolunteer = async (req, res, next) => {
  if (req.type !== 2) {
    return res.status(403).json({
      status: 'error',
      message: 'You are not allowed to perform this action',
    });
  }
  return next();
};

export {
 validateInput, validateToken, isBusiness, isVolunteer,
};
