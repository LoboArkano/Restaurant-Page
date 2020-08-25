import './stylesheets/reset.css';
import './stylesheets/style.css';
import navbar from './navbar';
import home from './home';

const content = document.getElementById('content');
content.appendChild(navbar());
content.appendChild(home());
