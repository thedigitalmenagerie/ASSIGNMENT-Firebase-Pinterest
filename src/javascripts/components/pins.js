import pin from '../../assets/pin.png';

const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = `<button class="btn btn-danger btn-lg mb-4" id="add-pin-btn"><img src="${pin}">Create Pin<img src="${pin}"></button>`;

  document.querySelector('#content').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#content').innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
    <h5 class="card-title mx-auto">${item.title}</h5>
      <button class="btn border-light outline-light delete-pin-btn" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>`;
  });
};

const noPins = () => {
  document.querySelector('#content').innerHTML = '<h1>No Boards</h1>';
};

export { showPins, noPins };
