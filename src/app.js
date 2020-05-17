import "./main.scss";
import Glide from '@glidejs/glide'
import smoothscroll from 'smoothscroll-polyfill';

new Glide('.glide').mount()

// Safari smooth scrolling
smoothscroll.polyfill();

document.querySelector('#about-link').addEventListener('click', e => {

  e.preventDefault()
  document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth' 
  })
});