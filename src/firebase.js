import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAWu38vFXJy3u-cYjKVqr3hNdvWbsbDfWo',
  authDomain: 'my-list-649b3.firebaseapp.com',
  projectId: 'my-list-649b3',
  databaseURL: 'https://my-list-649b3-default-rtdb.firebaseio.com',
  storageBucket: 'my-list-649b3.appspot.com',
  messagingSenderId: '937576870930',
  appId: '1:937576870930:web:19c7a074a2ed00e05b14cb'
};

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};*/

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
