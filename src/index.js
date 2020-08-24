import './stylesheets/reset.css';
import './stylesheets/style.css';
import brandImage from './images/brand.png';

function brand() {
  const brandDiv = document.createElement('div');

  brandDiv.classList.add('brand');
  const mybrandImage = new Image();
  mybrandImage.src = brandImage;

  brandDiv.appendChild(mybrandImage);

  return brandDiv;
}

function navTabs() {
  const tabs = document.createElement('ul');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const tab3 = document.createElement('li');

  tabs.classList.add('tab-container', 'd-flex', 'justify-between');
  tab1.innerHTML = 'Home';
  tab2.innerHTML = 'Menu';
  tab3.innerHTML = 'Contact';

  [tab1, tab2, tab3].innnerHtml = ['home', 'menu', 'contact'];

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  return tabs;
}

function component() {
  const nav = document.createElement('nav');

  // Lodash, now imported by this script
  nav.classList.add('nav-container', 'd-flex', 'justify-between', 'align-center');

  nav.appendChild(brand());
  nav.appendChild(navTabs());

  return nav;
}

const content = document.getElementById('content');
content.appendChild(component());
