// This is the style entry file
import '../styles/index.css';

import Alpine from 'alpinejs';
// import intersect from '@alpinejs/intersect';

import menuComponent from '../components/menu-component';

window.Alpine = Alpine;

// Example plugin usage
// Alpine.plugin(intersect);

Alpine.data('menuComponent', menuComponent);

Alpine.start();
