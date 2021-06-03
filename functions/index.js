const functions = require("firebase-functions");
const firebase = require("firebase");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var config = {
	apiKey: "AIzaSyCutkwRzT0s1vqQpE-ZEwZNNAaCF02M8OY",
  authDomain: "joegao-me.firebaseapp.com",
	databaseURL: "https://joegao-me-default-rtdb.firebaseio.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();


exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


exports.unlockDoor = functions.https.onRequest((request, response) => {
  functions.logger.info("Unlocked door!", {structuredData: true});
	database.ref('smartHome/apartmentDoor').set(true);
	response.send("Variable set");
});
