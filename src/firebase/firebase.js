import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {
  config
} from "../config";
const devConfig = {
  apiKey: `${config.firebase.FIREBASE_API_KEY}`,
  authDomain: `${config.firebase.AUTH_DOMAIN}`,
  databaseURL: `${config.firebase.DATABASE_URL}`,
  projectId: `${config.firebase.PROJECT_ID}`,
  storageBucket: `${config.firebase.STORAGE_BUCKET}`,
  messagingSenderId: `${config.firebase.MESSAGING_SENDER_ID}`
};

const prodConfig = {

};

if (!firebase.apps.length) {
  firebase.initializeApp(devConfig);
}
const githubProvider = new firebase.auth.GithubAuthProvider();
// var provider = new firebase.auth.GithubAuthProvider();

const conf = process.env.NODE_ENV === 'production' ?
  prodConfig :
  devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(conf);
}

const auth = firebase.auth();
const db = firebase.database();
const fb = firebase;
export {
  auth,
  githubProvider,
  fb,
  db
}