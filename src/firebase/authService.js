import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import config from "../config/config";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId:config.
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID,
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export class AuthService {
  app;
  auth;
  analytics;
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.auth = getAuth();
  }

  async login(email, passowrd) {
    try {
      console.log(email, passowrd);

      const userData = await signInWithEmailAndPassword(
        this.auth,
        email,
        passowrd
      );
      console.log(userData);
      return userData;
    } catch (error) {
      console.log("Login Error :: login ::", error.message);
      throw Error;
    }
  }

  async logout() {
    try {
      const userData = await signOut(this.auth);
      console.log(userData);
      return userData;
    } catch (error) {
      console.log("Logout Error :: logout ::", error.message);
      throw Error;
    }
  }
  async getCurrentUser() {
    try {
      return await onAuthStateChanged(this.auth, (user) => {
        if (user) {
          const uid = user.id;
          return uid;
        }
      });
    } catch (error) {
      console.log("Logout Error :: logout ::", error.message);
      throw Error;
    }
  }
}

const authService = new AuthService();

export default authService;
