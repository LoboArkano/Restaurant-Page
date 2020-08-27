import homeImg from './images/food2.jpg';

const getTitle = () => {
  const mainTitle = document.createElement('h1');

  mainTitle.innerHTML = 'Welcome to Nerium';
  mainTitle.classList.add('main-title');

  return mainTitle;
};

const getImg = () => {
  const myHomeImg = new Image();
  myHomeImg.src = homeImg;
  myHomeImg.classList.add('home-img');

  return myHomeImg;
};

const info = () => {
  const infoTxt = document.createElement('div');

  infoTxt.innerHTML = `
  <p class="info">Nerium is a unique experience that can be compared to a sweet awakening, a pleasant meal or an unforgettable dinner accompanied by an exclusive atmosphere for you.</p>
  <p class="info">Our space is designed so that you can enjoy our extensive menu in the most relaxed way so that all your senses can capture this experience.</p>
  `;

  return infoTxt;
};

const home = () => {
  const content = document.getElementById('content');
  const home = document.createElement('main');
  const infoContainer = document.createElement('div');

  home.classList.add('home-container', 'd-flex', 'wrap', 'justify-center');
  infoContainer.classList.add('info-container');

  infoContainer.appendChild(getTitle());
  infoContainer.appendChild(getImg());
  infoContainer.appendChild(info());
  home.appendChild(infoContainer);

  if (content.childNodes.length === 1) {
    content.appendChild(home);
  } else {
    content.replaceChild(home, content.childNodes[1]);
  }
};

export default home;
