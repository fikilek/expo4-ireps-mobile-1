import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

import { initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ireps-mobile

// const firebaseConfig = {
// 	apiKey: "AIzaSyDyxZzonDa_tmfjbDL-QZtX48vF7j5-Xn8",
// 	authDomain: "ireps2.firebaseapp.com",
// 	projectId: "ireps2",
// 	storageBucket: "ireps2.appspot.com",
// 	messagingSenderId: "885517634969",
// 	appId: "1:885517634969:web:b5da5c7da530cabd45d708",
// };


const firebaseConfig = {
  apiKey: "AIzaSyAkE9nf-G-gW9Pv9ZSxRzyr0FL3G6XXJA8",
  authDomain: "ireps2.firebaseapp.com",
  projectId: "ireps2",
  storageBucket: "ireps2.appspot.com",
  messagingSenderId: "885517634969",
  appId: "1:885517634969:web:f013c3961097836245d708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
export const db = getFirestore(app);

// Initialize firebase auth
// export const auth = getAuth(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// initialize firebase storage
export const storage = getStorage(app);

// Initialize functions
export const functions = getFunctions(app);
