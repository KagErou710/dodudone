import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyApZtgVNC1XWXcJcDR0tfm0Cpy5d_TundI",
  authDomain: "dodudone-eda0c.firebaseapp.com",
  projectId: "dodudone-eda0c",
  storageBucket: "dodudone-eda0c.appspot.com",
  messagingSenderId: "1042493417841",
  appId: "1:1042493417841:web:6a52c128b04004146d6ed0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

