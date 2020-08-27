import homeImg from './images/food2.jpg';

const getImg = () => {
  const myHomeImg = new Image();
  myHomeImg.src = homeImg;
  myHomeImg.classList.add('home-img');

  return myHomeImg;
};

const info = () => {
  const infoTxt = document.createElement('div');

  infoTxt.innerHTML = `
  <p class="info">Nerium es una experiencia única que se puede comparar desde un dulce despertar, una comida agradable o una cena inolvidable acompañada de un ambiente exclusivo para ti.</p>
  <p class="info">Nuestro espacio está pensado para que puedas disfrutar de nuestro amplio menú de la manera más relajada para que todos tus sentidos puedan captar esta experiencia.</p>
  `;

  return infoTxt;
};

const home = () => {
  const content = document.getElementById('content');
  const home = document.createElement('main');
  const infoContainer = document.createElement('div');

  home.classList.add('home-container', 'd-flex', 'wrap', 'justify-center');
  infoContainer.classList.add('info-container');

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
