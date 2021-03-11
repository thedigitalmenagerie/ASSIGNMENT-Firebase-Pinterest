const boardInfo = (boardObject) => {
  document.querySelector('#profileContainer').innerHTML = '';
  document.querySelector('h6').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#boardTitleForPins').innerHTML = '';
  document.querySelector('#boardTitleForPins').innerHTML += `<h1 class="text-white">'${boardObject.title}'s Pins'</h1>`;
};

export default boardInfo;
