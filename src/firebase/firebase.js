import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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
    // this.analytics = getAnalytics(this.app);
    this.auth = getAuth(this.app);
  }

  async login(email, passowrd) {
    try {
      console.log(email, passowrd);

      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        passowrd
      );
      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (error) {
      console.log("Login Error :: login ::", error);
      throw error;
    }
  }

  async register(email, passowrd, username) {
    try {
      console.log(email, passowrd, username);

      const userCreated = await createUserWithEmailAndPassword(
        this.auth,
        email,
        passowrd,
        username
      );
      const user = userCreated.user;
      console.log(user);
      // return {
      //   uid: user.uid,
      //   email: user.email,
      //   displayName: user.displayName,
      // };
    } catch (error) {
      console.log("Register Error :: Register ::", error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log("Logout Error :: logout ::", error.message);
      throw Error;
    }
  }

  async getCurrentUser() {
    try {
      const loggedInUser = await onAuthStateChanged(this.auth, (user) => {
        if (user) {
          const uid = user.id;
          console.log(uid, user);
          return uid;
        }
      });
      console.log(loggedInUser);
      return loggedInUser;
    } catch (error) {
      console.log("Get Current User Error :: GetUser ::", error.message);
      throw Error;
    }
  }
}

const authService = new AuthService();

export default authService;
