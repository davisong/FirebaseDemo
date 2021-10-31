import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey:
    "AAAATaomCIc:APA91bGBf4hX1LfsQyjknzgvOBHJC_4mwtVzDfgvxRbq1EVckVK8JK4DJfnUJGQ80z5HLAWNaUx8-WwODdGyeTmA-ZRGAOX3j3I2o9WA1KOb3UqAdxolid3hh9UQI2dzHvT9VBnhlmHJ",
  authDomain: "project-333567101063.firebaseapp.com",
  databaseURL: "https://production-project-333567101063.firebaseio.com",
  projectId: "fir-demo-8caeb",
  storageBucket: "production-333567101063.appspot.com",
  messagingSenderId: "333567101063",
  appId: "1:333567101063:android:d6d08246e843e32dba5022",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
