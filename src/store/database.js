import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDm-NAPGdJdgBrlLd15FQtKoVTcfnSOq_Q',
  authDomain: 'quiz-app-bae2b.firebaseio.com',
  databaseURL: 'https://quiz-app-bae2b.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;