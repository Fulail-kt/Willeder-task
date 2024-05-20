import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';
import { updateUserFields } from '../../../models/user';

export const updateAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.uid;
    const userData = req.body; 
    await admin.firestore().collection('users').doc(userId).set(userData, { merge: true });
    res.status(200).send('Account updated successfully');
  } catch (error) {
    next(error);
  }
};

export const updatePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.uid;
    const {newPassword}=req.body
    const data={
        password:newPassword
    }
    await updateUserFields(userId,data)
    res.status(200).send('Password updated successfully');
  } catch (error) {
    next(error);
  }
};

export const getAccountInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user.uid;
    const userDoc = await admin.firestore().collection('users').doc(userId).get();
    const userData = userDoc.data();
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};
