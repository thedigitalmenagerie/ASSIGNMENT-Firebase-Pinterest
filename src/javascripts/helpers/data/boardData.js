// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(uid).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

const createBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json/${firebaseKey}.json`)
    .then((response) => {
      const body = { firebaseKey: response.data.title };
      axios.patch(`${dbUrl}/boards/${response.data.title}.json`, body)
        .then(() => {
          getBoards(uid).then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});

// const updateBoard = (firebaseKey, boardObject) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/boards/${firebaseKey}.json`, boardObject)
//     .then(() => getBoards(firebase.auth().currentUser.uid)).then((boardsArray) => resolve(boardsArray))
//     .catch((error) => reject(error));
// });

// const getBoardPins = (boardId) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/boards.json?orderBy="author_id"&equalTo="${boardId}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

export { getBoards, deleteBoard, createBoard };
