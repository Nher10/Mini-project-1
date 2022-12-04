// Variables
// For Sign Page
const inputfields = document.querySelectorAll('.input-field');
const toesup_btn = document.querySelectorAll('.to-s-up');
const main = document.querySelector('main');


// For Main Page
// for medium size navigation
const openMenu = document.querySelector('.openMenu');
const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.closeMenu');
const modeOut = document.querySelector('.mode-out');
const hideLogo = document.querySelector('.logo h1');

// for blue-mode
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

const togglemd = document.querySelector('.toggle-md');
const circlemd = document.querySelector('.circle-md');

const navbarmd = document.querySelector('.nav-md');

const navbar = document.querySelector('.navbar')
const menu = document.querySelector('.menu')
const mainmenu1 = document.querySelector('.main-menu1')
const mainmenu2 = document.querySelector('.main-menu2')
const mainmenu3 = document.querySelector('.main-menu3')
const mainmenu4 = document.querySelector('.main-menu4')

const section1 = document.querySelector('.section-1')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const section3 = document.querySelector('.section-3')

const section2 = document.querySelector('.section-2')
const section4 = document.querySelector('.section-4')

const sectioncolor1 = document.querySelector('.section-1-heading')
const sectioncolor2 = document.querySelector('.section-2-heading')
const sectioncolor3 = document.querySelector('.section-3-heading')
const sectioncolor4 = document.querySelector('.section-4-heading')

const bluemodepar = document.querySelector('.blue-mode p')
const navbarcolor1 = document.querySelector('.navbar-link1')
const navbarcolor2 = document.querySelector('.navbar-link2')
const navbarcolor3 = document.querySelector('.navbar-link3')
const navbarcolor4 = document.querySelector('.navbar-link4')

const logouticonlg = document.querySelector('.logout a')



// For Sign Page

inputfields.forEach( (inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    })
})

toesup_btn.forEach(btninup => {
    btninup.addEventListener('click', () =>  {
        main.classList.toggle('sign-up-mode');
    })
})





// For Main Page
// nav-md
openMenu.addEventListener('click', (show) => {
    hideLogo.style.display = 'none';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    mainMenu.style.display = 'flex';
    mainMenu.style.flexDirection = 'column';
    mainMenu.style.alignItems = 'center';
    mainMenu.style.justifyContent = "space-evenly";
    modeOut.style.display = 'block';
})

closeMenu.addEventListener('click', (hide) => {
    hideLogo.style.display = 'block';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    mainMenu.style.display = 'none';
    modeOut.style.display = 'none';
})

// end of nav-md



// Darkmode Mode

// move-toggle-large-screen-size

toggle.addEventListener('click', () => {

    circle.classList.toggle('move');

    


    navbar.classList.toggle('blue-1')
    menu.classList.toggle('menubg1')
    menu.classList.toggle('blue-1')

    section1.classList.toggle('section-1-bg1')
    section1.classList.toggle('blue-2')
    card1.classList.toggle('cardonebg1')
    card1.classList.toggle('blue-2')
    card2.classList.toggle('cardtwobg1')
    card2.classList.toggle('blue-2')
    card3.classList.toggle('cardthreebg1')
    card3.classList.toggle('blue-2')
    section3.classList.toggle('section-3-bg3')
    section3.classList.toggle('blue-2')

    section2.classList.toggle('section-2-bg2')
    section2.classList.toggle('blue-4')
    section4.classList.toggle('section-4-bg4')
    section4.classList.toggle('blue-4')

    sectioncolor1.classList.toggle('section-1-col1')
    sectioncolor1.classList.toggle('blue-color-1')
    sectioncolor2.classList.toggle('section-2-col2')
    sectioncolor2.classList.toggle('blue-color-1')
    sectioncolor3.classList.toggle('section-3-col3')
    sectioncolor3.classList.toggle('blue-color-1')
    sectioncolor4.classList.toggle('section-4-col4')
    sectioncolor4.classList.toggle('blue-color-1')

    bluemodepar.classList.toggle('blue-mode-p')
    bluemodepar.classList.toggle('blue-color-3')

    if(bluemodepar.textContent == 'Blue') {
        bluemodepar.textContent = 'Green';
    } else if (bluemodepar.textContent !== 'Blue') {
        bluemodepar.textContent = 'Blue'
    }


    navbarcolor1.classList.toggle('navbar-color-link-1')
    navbarcolor1.classList.toggle('blue-color-3')
    navbarcolor2.classList.toggle('navbar-color-link-2')
    navbarcolor2.classList.toggle('blue-color-3')
    navbarcolor3.classList.toggle('navbar-color-link-3')
    navbarcolor3.classList.toggle('blue-color-3')
    navbarcolor4.classList.toggle('navbar-color-link-4')
    navbarcolor4.classList.toggle('blue-color-3')

    logouticonlg.classList.toggle('logoutIcon')
    logouticonlg.classList.toggle('blue-color-4')
});

// blue-mode md size
togglemd.addEventListener('click', () => {

    circlemd.classList.toggle('move');

    navbarmd.classList.toggle('blue-1');

    mainmenu1.classList.toggle('blue-color-3')
    mainmenu2.classList.toggle('blue-color-3')
    mainmenu3.classList.toggle('blue-color-3')
    mainmenu4.classList.toggle('blue-color-3')

    section1.classList.toggle('section-1-bg1')
    section1.classList.toggle('blue-2')
    card1.classList.toggle('cardonebg1')
    card1.classList.toggle('blue-2')
    card2.classList.toggle('cardtwobg1')
    card2.classList.toggle('blue-2')
    card3.classList.toggle('cardthreebg1')
    card3.classList.toggle('blue-2')
    section3.classList.toggle('section-3-bg3')
    section3.classList.toggle('blue-2')

    section2.classList.toggle('section-2-bg2')
    section2.classList.toggle('blue-4')
    section4.classList.toggle('section-4-bg4')
    section4.classList.toggle('blue-4')

    sectioncolor1.classList.toggle('section-1-col1')
    sectioncolor1.classList.toggle('blue-color-1')
    sectioncolor2.classList.toggle('section-2-col2')
    sectioncolor2.classList.toggle('blue-color-1')
    sectioncolor3.classList.toggle('section-3-col3')
    sectioncolor3.classList.toggle('blue-color-1')
    sectioncolor4.classList.toggle('section-4-col4')
    sectioncolor4.classList.toggle('blue-color-1')
})

// end of move

// End of Blue Mode



// menu-icon
document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})
// end of menu-icon





// for section icons
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1

setInterval(() => {

    i++
     
    const icon = document.querySelector('.section-1-icons i.change')

    icon.classList.remove('change')

    if(i > icons.length) {

        icons[0].classList.add('change')
        i = 1

    } else {

        icon.nextElementSibling.classList.add('change')

    }
    
}, 2000);
// end of section 1 icons