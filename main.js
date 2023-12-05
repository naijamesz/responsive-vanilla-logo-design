import icon from './images/icon-burger-menu.svg';

import './style.css';
// import './css-reset.css';
import { content } from './Content';

document.querySelector('#app').innerHTML = `
        <div class="header-container">
            <header>
                <div class="logo"><span class="highlight">Responsive Workshop</span> - LOGO DESIGN</div>
                <nav>
                    <a href="#" class="mybutton">ABOUT</a>
                    <a href="#" class="mybutton">PRICING</a>
                    <a href="#" class="mybutton">CONTACT</a>
                </nav>

                <div class="mob-wrapper">

                    <img src=${icon} alt="Mobile Menu Icon" style="width: 40px;" class="burgermenu">

                    <div class="mob-nav">
                        <a href="#" class="navbutton">ABOUT</a>
                        <a href="#" class="navbutton">PRICING</a>
                        <a href="#" class="navbutton">CONTACT</a>
                    </div>


                </div>

            </header>
        </div>
        ${content}
`;
// const burgerMenu = document.querySelector('.burgermenu');
// const mobNav = document.querySelector('.mob-nav');

// document.ready(function () {
//   burgerMenu.addEventListener('click', e => {
//     mobNav.toggle();
//   });
// });
// setupCounter(document.querySelector('#counter'));
