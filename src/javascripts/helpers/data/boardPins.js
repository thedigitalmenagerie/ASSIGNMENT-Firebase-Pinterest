import { deleteBoard } from './boardData';
import { deletePins, getBoardPins } from './pinData';

const deleteBoardPins = (boardId, userId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePin = boardPinsArray.map((pin) => deletePins(pin.firebaseKey));
    Promise.all(deletePin).then(() => resolve(deleteBoard(boardId, userId)));
  }).catch((error) => reject(error));
});

export default deleteBoardPins;
