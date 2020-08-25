import brandImage from './images/brand.png';

const brand = () => {
  const brandDiv = document.createElement('div');

  brandDiv.classList.add('brand');
  const mybrandImage = new Image();
  mybrandImage.src = brandImage;
  mybrandImage.classList.add('brand-img');

  brandDiv.appendChild(mybrandImage);

  return brandDiv;
};

const navTabs = () => {
  const tabs = document.createElement('ul');
  const tab1 = document.createElement('li');
  const tab2 = document.createElement('li');
  const tab3 = document.createElement('li');

  tabs.classList.add('tab-container', 'd-flex', 'justify-between');
  tab1.innerHTML = 'home';
  tab2.innerHTML = 'menu';
  tab3.innerHTML = 'contact';

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  return tabs;
};

const navbar = () => {
  const nav = document.createElement('nav');

  nav.classList.add('nav-container', 'd-flex', 'justify-between', 'align-center');

  nav.appendChild(brand());
  nav.appendChild(navTabs());

  return nav;
};

export default navbar;
