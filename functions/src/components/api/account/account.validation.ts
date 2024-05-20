import { Schema } from 'express-validator';


export const ACCOUNT_PASSWORD_SCHEMA: Schema = {
        newPassword: {
          in: ['body'],
          isString: true,
          isLength: { options: { min: 6 } } 
        },
};

export const ACCOUNT_SCHEMA: Schema = {
  email: {
    in: ['body'],
    isEmail: true,
    optional: true
  },
  password: {
    in: ['body'],
    isString: true,
    isLength: { options: { min: 6 } } 
  },
  name: {
    in: ['body'],
    isString: true,
    optional: true 
  },
  phone: {
    in: ['body'],
    isString: true,
    optional: true 
  },
  address: {
    in: ['body'],
    isString: true,
    optional: true 
  },
  status: {
    in: ['body'],
    optional: true 
  },
  refresh_token: {
    in: ['body'],
    isString: true,
    optional: true 
  },
  created_at: {
    in: ['body'],
    isISO8601: true,
    optional: true 
  },
  updated_at: {
    in: ['body'],
    isISO8601: true,
    optional: true 
  },
  deleted_at: {
    in: ['body'],
    optional: true 
  },
};
