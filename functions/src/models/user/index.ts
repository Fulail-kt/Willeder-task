
import { db } from '../../utils/firebase';
import { USER_COLLECTION_KEY, UserDocument, userConverter } from './user.entity';

const COLLECTION_KEY = USER_COLLECTION_KEY;
const converter = userConverter;

export const getUser = async (id: string) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(id).withConverter(converter);
    const docSnap = await docRef.get();
    return docSnap.data();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const querySnapshot = await db.collection(COLLECTION_KEY).where('email', '==', email).withConverter(converter).get();

    if (querySnapshot.empty) {
      return null;
    }

    const userData: UserDocument[] = [];
    querySnapshot.forEach((doc) => {
      userData.push(doc.data());
    });

    return userData;
  } catch (err) {
    return Promise.reject(err);
  }
};


export const addUser = async (user: UserDocument) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(user.user_id).withConverter(converter);
    await docRef.set(user, { merge: true });
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUser = async (id: string, updates: Partial<UserDocument>) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(id).withConverter(converter);
    await docRef.update(updates);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateUserFields = async (id: string, fieldsToUpdate: Record<string, any>) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(id).withConverter(converter);
    await docRef.update(fieldsToUpdate);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};


export const deleteUser = async (id: string) => {
  try {
    const docRef = db.collection(COLLECTION_KEY).doc(id).withConverter(converter);
    await docRef.delete();
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};
