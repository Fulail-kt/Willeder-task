import { ParamSchema, Location } from 'express-validator';

export const VALIDATION_STRING = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
  notEmpty: true,
});

export const VALIDATION_EMAIL_EXIST = (where: Location): ParamSchema => ({
  in: [where],
  isEmail: true,
});

export const VALIDATION_PASSWORD_CHECK = (where: Location, emailField: string): ParamSchema => ({
  in: [where],
  custom: {
    options: (value, { req }) => {
      const email = req.body[emailField];
      return Promise.resolve(true); 
    },
    errorMessage: 'Invalid email or password',
  },
});


export const VALIDATION_EMAIL_NOT_EXIST = (where: Location): ParamSchema => ({
  in: [where],
  isEmail: true,
});

export const VALIDATION_ACCOUNT_TEL = (where: Location): ParamSchema => ({
  in: [where],
  isMobilePhone: {
    options: ['any'],
  },
});

export const VALIDATION_PASSWORD = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,
});


export const VALIDATION_TOKEN = (where: Location): ParamSchema => ({
  in: [where],
  isString: true,

});

