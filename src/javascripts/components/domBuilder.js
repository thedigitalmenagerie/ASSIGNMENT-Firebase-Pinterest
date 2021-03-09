import profilePic from '../../assets/profilePic.png';

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id=navigation></div>
    <div id="mainContainer">
      <div id="profileContainer"><img src="${profilePic}"></div>
      <h6>@thedigitalmenagerie</h6>
      <div id="add-button"></div>
      <div id="formContainer"></div>
      <div id="content"></div>
    </div>`;
};

export default domBuilder;
