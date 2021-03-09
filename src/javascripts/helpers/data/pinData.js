// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// const deletePins = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
//     .then(() => getPins().then((pinsArray) => resolve(pinsArray)))
//     .catch((error) => reject(error));
// });

// const createPin = (pinObject, uid) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/pins.json`, pinObject)
//     .then((response) => {
//       const body = { firebaseKey: response.data.title };
//       axios.patch(`${dbUrl}/pins/${response.data.title}.json`, body)
//         .then(() => {
//           getPins(uid).then((pinsArray) => resolve(pinsArray));
//         });
//     }).catch((error) => reject(error));
// });

// const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
//     .then(() => getPins(firebase.auth().currentUser.uid)).then((pinsArray) => resolve(pinsArray))
//     .catch((error) => reject(error));
// });

// SEARCH BOOKS

export default getPins;
