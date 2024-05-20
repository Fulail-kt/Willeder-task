import { firestore, ServiceAccount } from 'firebase-admin';
import admin from 'firebase-admin';

// import prodConfig from './serviceAccounts/firebase-prod';
import prodConfig from './serviceAcounts/firebase-dev.json';
import devConfig from './serviceAcounts/firebase-dev.json';

const config: ServiceAccount|any = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

admin.initializeApp({
  credential: admin.credential.cert(config),
});

const db = firestore();
const adminauth = admin.auth();

export { db, adminauth };

