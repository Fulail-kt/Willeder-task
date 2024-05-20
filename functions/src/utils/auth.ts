import { Request, Response, NextFunction } from 'express';
import { unauthorizedException } from './apiErrorHandler';
import { logger } from 'firebase-functions/v1';
import jwt from 'jsonwebtoken'; 



const JWT_SECRET = process.env.JWT_SECRET || 'jwtsecret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refreshsecret';
const REFRESH_TOKEN_EXPIRED_IN = process.env.REFRESH_TOKEN_EXPIRED_IN || '7d';
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'accesssecret';
const ACCESS_TOKEN_EXPIRED_IN = process.env.ACCESS_TOKEN_EXPIRED_IN || '15m';

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers['authorization'];
    if (!bearer) throw unauthorizedException('No token provided');

    const token = bearer.split(' ')[1];

    jwt.verify(token, JWT_ACCESS_SECRET, (err: any, decoded: any) => {
      if (err) throw unauthorizedException('Invalid token');

      req.user = decoded;
      next();
    });
  } catch (err) {
    logger.warn(err);
    next(err);
  }
};
