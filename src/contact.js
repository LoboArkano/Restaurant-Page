import phone from './images/phone.png';
import mail from './images/mail.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram-sketched.png';

const getTitle = () => {
  const mainTitle = document.createElement('h1');

  mainTitle.innerHTML = 'Come Visit Us';
  mainTitle.classList.add('main-title', 'w-100');

  return mainTitle;
};

const getMap = () => {
  const ifrm = document.createElement('iframe');

  ifrm.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1109.6297840447635!2d-103.38930074407187!3d20.69662371147926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae45edba3425%3A0x10560a2e30c0ed65!2sBuenos%20Aires%203117%2C%20Providencia%204a.%20Secc%2C%2044639%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1598458856342!5m2!1sen!2smx');
  ifrm.style.width = '500px';
  ifrm.style.height = '360px';

  return ifrm;
};

const getSTitle = (title) => {
  const t = document.createElement('p');

  t.innerHTML = title;
  t.classList.add('title');

  return t;
};

const scheduleList = () => {
  const list = document.createElement('ul');
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');
  const days = [
    'Monday. 8.30am - 4pm',
    'Tuesday - Saturday: 8.30am - 10pm',
    'Sunday. 9am - 5pm',
  ];

  [item1, item2, item3].forEach((item, i = 0) => {
    item.innerHTML = days[i];
    item.classList.add('item');
    list.appendChild(item);
    i += 1;
  });

  return list;
};

const schedule = () => {
  const schedule = document.createElement('div');

  schedule.classList.add('schedule');

  schedule.appendChild(getSTitle('Schedule'));
  schedule.appendChild(scheduleList());

  return schedule;
};

const getIcon = (type, i) => {
  const icons = [phone, mail];
  const socialIcons = [facebook, instagram];
  const icon = new Image();

  if (type === 'icon') {
    icon.src = icons[i];
  } else {
    icon.src = socialIcons[i];
  }
  icon.classList.add('icon');

  return icon;
};

const contactInfo = (type, i) => {
  const item = document.createElement('p');
  const text = ['33 2471 3310', 'contacto@neriumcocina.com'];
  const social = ['Facebook', 'Instagram'];
  const socialLinks = ['https://www.facebook.com/NeriumCocinaMx', 'https://www.instagram.com/neriummx/'];

  item.classList.add('item', 'd-flex', 'align-center');
  if (type === 'text') {
    item.appendChild(getIcon('icon', i));
    item.innerHTML += text[i];
  } else {
    item.appendChild(getIcon('social', i));
    item.innerHTML += `
    <a href="${socialLinks[i]}">${social[i]}</a>
    `;
  }

  return item;
};

const contactList = () => {
  const contactList = document.createElement('div');

  contactList.classList.add('contact-info');

  contactList.appendChild(getSTitle('Contact Info'));
  for (let i = 0; i < 2; i += 1) {
    contactList.appendChild(contactInfo('text', i));
  }
  for (let i = 0; i < 2; i += 1) {
    contactList.appendChild(contactInfo('social', i));
  }

  return contactList;
};

const contact = () => {
  const content = document.getElementById('content');
  const contact = document.createElement('main');

  contact.classList.add('contact', 'd-flex', 'wrap');

  contact.appendChild(getTitle());
  contact.appendChild(getMap());
  contact.appendChild(schedule());
  contact.appendChild(contactList());

  content.replaceChild(contact, content.childNodes[1]);
};

export default contact;
