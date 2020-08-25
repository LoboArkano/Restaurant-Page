import './stylesheets/reset.css';
import './stylesheets/style.css';
import navbar from './navbar';

const content = document.getElementById('content');
content.appendChild(navbar());
