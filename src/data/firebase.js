import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmpAsx6qc3XbW87SIjvq4HCu_PRVdjVD8",
  authDomain: "app-design2021.firebaseapp.com",
  projectId: "app-design2021",
  storageBucket: "app-design2021.appspot.com",
  messagingSenderId: "85005850917",
  appId: "1:85005850917:web:c87acc70a02e4d09a9e2cc",
  measurementId: "G-01JLFGQH56",
};

if (!firebaseConfig.apiKey) {
  throw new Error("Missing firbase crediential: apiKey");
}

if (!firebaseConfig.authDomain) {
  throw new Error("Missing firbase crediential: authDomain");
}

if (!firebaseConfig.projectId) {
  throw new Error("Missing firbase crediential: projectId");
}

if (!firebaseConfig.storageBucket) {
  throw new Error("Missing firbase crediential: storageBucket");
}

if (!firebaseConfig.messagingSenderId) {
  throw new Error("Missing firbase crediential: messagingSenderId");
}

if (!firebaseConfig.appId) {
  throw new Error("Missing firbase crediential: appId");
}

if (!firebaseConfig.measurementId) {
  throw new Error("Missing firbase crediential: measurementId");
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
