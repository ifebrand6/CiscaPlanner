import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-analytics'
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyByOlVqCpIDzNiFsoaMNJ4OLzAQ4l3DY1A",
    authDomain: "cisca-planner.firebaseapp.com",
    databaseURL: "https://cisca-planner.firebaseio.com",
    projectId: "cisca-planner",
    storageBucket: "cisca-planner.appspot.com",
    messagingSenderId: "865934268718",
    appId: "1:865934268718:web:79b8c5756e1f554dddc2bf",
    measurementId: "G-SJBRDWWNBJ"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});
export default firebase;