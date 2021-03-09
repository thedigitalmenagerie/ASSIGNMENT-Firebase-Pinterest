import firebase from 'firebase/app';
import 'firebase/auth';
import { showBoards, noBoards } from '../components/boards';
import addBoardForm from '../components/forms/addBoard';
import { getBoards, deleteBoard, createBoard } from '../helpers/data/boardData';
import getPins from '../helpers/data/pinData';
import { showPins, noPins } from '../components/pins';

const domEvents = (uid) => {
  document.querySelector('#showCreatePinButton').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        noPins();
      }
    });
  });

  document.querySelector('#showCreateBoardButton').addEventListener('click', () => {
    getBoards(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showBoards(pinsArray);
      } else {
        noBoards();
      }
    });
  });

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-board-btn')) {
      console.warn('Clicked add board button', e.target.id);
      addBoardForm();
    }

    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#boardTitle').value,
        image: document.querySelector('#boardImage').value,
        uid: firebase.auth().currentUser.uid
      };
      createBoard(boardObject, uid).then((boardArray) => showBoards(boardArray));
    }

    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoard(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
    }
  });
};

export default domEvents;
