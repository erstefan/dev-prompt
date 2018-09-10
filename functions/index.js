const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.addUserToDB = functions.auth.user().onCreate(function (user) {
  admin.database().ref('/users/' + user.uid).set({
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified
  });
});