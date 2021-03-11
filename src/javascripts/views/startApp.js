import { showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import addBoardForm from '../components/forms/addBoard';
import addPinForm from '../components/forms/addPin';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import { getBoards } from '../helpers/data/boardData';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  logoutButton();
  getBoards().then((boards) => showBoards(boards));
  addBoardForm();
  addPinForm();
};

export default startApp;
