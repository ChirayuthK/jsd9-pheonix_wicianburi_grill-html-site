// Import buttons
import '../components/buttons/ButtonAdd.js';
import '../components/buttons/ButtonFacebook.js';
import '../components/buttons/ButtonGoogle.js';
import '../components/buttons/ButtonMain.js';
import '../components/buttons/ButtonSecondary.js';
import '../components/buttons/ButtonThird.js';

// Import navigation
import '../components/navigation/NavBar.js';

// Import footer
import '../components/footer/FooterBar.js';

// Import slideshow functions
import { currentSlide, initSlideshow, plusSlides } from './utils/slideshow/Slideshow.js';

// Make functions available globally for HTML onclick
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;

document.addEventListener('DOMContentLoaded', initSlideshow)