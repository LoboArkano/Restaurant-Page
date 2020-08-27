import food1 from './images/food1.jpg';
import food3 from './images/food3.jpg';
import food4 from './images/food4.jpg';
import food5 from './images/food5.jpg';
import food6 from './images/food6.jpg';
import food7 from './images/food7.jpg';
import food8 from './images/food8.jpg';
import food10 from './images/food10.jpg';
import food11 from './images/food11.jpg';

const NUM_OF_ITEMS = 9;
const foodImgs = [food1, food3, food4, food5, food6, food7, food8, food10, food11];
const foodNames = ['Sope Ranchero', 'Cappuccino', 'Bacon waffles', 'Tuna Spicy', 'Fruit waffle', 'Crunchy esquites', 'Nerium Burger', 'Fruit cereal', 'Chorizo Toast'];
const foodDesc = ['Prepared with corn dough, bean puree, mounted by a fried egg with its yolk to taste and bathed with pressed pork rind sauce', 'Enjoy the cold of November, starting your week with a warm Cappuccino.', 'Bacon waffles, with maple syrup and walnut. Did you fancy them?', 'Light, fresh, spicy... delicious!', 'Don\'t be a Grinch! This season give and receive pure love.', 'Enjoy the variety of dishes that we have for each member of the family.', 'Accompany her with a craft beer and a nice company.', 'A sweet and balanced breakfast.', 'Prepared with sourdough bread 🍞, bean puree, chorizo stew 🔥 with güero chili, Oaxaca cheese, fresh nopales salad 🌵, onion and coriander'];
const foodPrice = ['10', '20', '30', '40', '50', '60', '70', '80', '90'];

const getTitle = () => {
  const mainTitle = document.createElement('h1');

  mainTitle.innerHTML = 'Check Our Menu';
  mainTitle.classList.add('main-title', 'w-100');

  return mainTitle;
};

const getImg = (i) => {
  const foodImg = new Image();

  foodImg.src = foodImgs[i];
  foodImg.classList.add('food-img');

  return foodImg;
};

const getName = (i) => {
  const name = document.createElement('p');

  name.innerHTML = `${foodNames[i]}`;
  name.classList.add('name');

  return name;
};

const getDesc = (i) => {
  const desc = document.createElement('p');

  desc.innerHTML = `${foodDesc[i]}`;
  desc.classList.add('desc');

  return desc;
};

const getPrice = (i) => {
  const price = document.createElement('p');

  price.innerHTML = `${foodPrice[i]}$`;
  price.classList.add('price');

  return price;
};

const getInfo = (i) => {
  const foodInfo = document.createElement('div');

  foodInfo.classList.add('food-info');
  foodInfo.appendChild(getName(i));
  foodInfo.appendChild(getDesc(i));
  foodInfo.appendChild(getPrice(i));

  return foodInfo;
};

const card = (i) => {
  const card = document.createElement('div');

  card.classList.add('card', 'd-flex', 'wrap');
  card.appendChild(getImg(i));
  card.appendChild(getInfo(i));

  return card;
};

const menu = () => {
  const content = document.getElementById('content');
  const menuContainer = document.createElement('main');

  menuContainer.classList.add('menu-container', 'd-flex', 'wrap', 'justify-between');

  menuContainer.appendChild(getTitle());
  for (let i = 0; i < NUM_OF_ITEMS; i += 1) {
    menuContainer.appendChild(card(i));
  }

  content.replaceChild(menuContainer, content.childNodes[1]);
};

export default menu;
