import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { config } from "../config";

const devConfig = {
  apiKey: `${config.firebase.FIREBASE_API_KEY}`,
  authDomain: `${config.firebase.AUTH_DOMAIN}`,
  databaseURL: `${config.firebase.DATABASE_URL}`,
  projectId: `${config.firebase.PROJECT_ID}`,
  storageBucket: `${config.firebase.STORAGE_BUCKET}`,
  messagingSenderId: `${config.firebase.MESSAGING_SENDER_ID}`
};

const prodConfig = {};

if(!firebase.apps.length) {
  firebase.initializeApp(devConfig);
}
console.log('fbbbb', firebase.default.auth())
const auth = firebase.default.auth();
const db = firebase.default.database();
const fb = firebase;

const githubProvider = new firebase.auth.GithubAuthProvider();
// var provider = new firebase.auth.GithubAuthProvider();

const conf = process.env.NODE_ENV === 'production' ?
  prodConfig :
  devConfig;



export {
  auth,
  githubProvider,
  fb,
  db
}