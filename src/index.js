import './stylesheets/reset.css';
import './stylesheets/style.css';
import navbar from './navbar';
import home from './home';
import menu from './menu';

const content = document.getElementById('content');
content.appendChild(navbar());
content.appendChild(home());
content.appendChild(menu());
