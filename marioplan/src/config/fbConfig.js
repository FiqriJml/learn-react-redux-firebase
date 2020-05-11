  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAOQSGpWwdi-7go6ByYk4r_0R-hlf80Df0",
    authDomain: "vuejs-playlist-ffac2.firebaseapp.com",
    databaseURL: "https://vuejs-playlist-ffac2.firebaseio.com",
    projectId: "vuejs-playlist-ffac2",
    storageBucket: "vuejs-playlist-ffac2.appspot.com",
    messagingSenderId: "287538032929",
    appId: "1:287538032929:web:8bfdac2dde292b104f0e60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;