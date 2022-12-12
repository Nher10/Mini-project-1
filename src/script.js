
// For Main Page
// for medium size navigation
const openMenu = document.querySelector('.openMenu');
const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.closeMenu');
const modeOut = document.querySelector('.mode-out');
const hideLogo = document.querySelector('.logo h1');



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







// mainPage to canteeen Page or vice versa
navbarcolor1.addEventListener('click', () => {
    mainPage.style.display = 'none';
    canteenPage.style.display = 'block';
})

mainmenu1.addEventListener('click', () => {
    canteenPage.style.display = 'block';
    mainPage.style.display = 'none';
    signPage.style.display = 'none';
})

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


const signoutModal = document.querySelector('.signout-modal');
const stayBtn = document.querySelector('.stay-btn');
const leaveBtn = document.querySelector('.leave-btn');
const logouticonmd = document.querySelector('.logout-md');

logouticonlg.addEventListener('click', () => {
    signoutModal.style.display = 'block';
})

logouticonmd.addEventListener('click', () => {
    signoutModal.style.display = 'block';
})

stayBtn.addEventListener('click', () => {
    signoutModal.style.display = 'none';
})

leaveBtn.addEventListener('click', () => {
    signoutModal.style.display = 'none';
    location.replace('index.html');
})




// for canteen page

// let canteen = document.querySelector('#canteen');

// let canteenItemsData = [{
//     id: 'item1',
//     name: 'Pancakes',
//     price: 50,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-1.jpg'
// },{
//     id: 'item2',
//     name: 'Cupcakes',
//     price: 50,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-2.jpg'
// },{
//     id: 'item3',
//     name: 'Hummus',
//     price: 100,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-3.jpg'
// },{
//     id: 'item4',
//     name: 'Hamburger',
//     price: 75,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-4.jpg'
// },{
//     id: 'item5',
//     name: 'Salmon',
//     price: 90,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-5.jpg'
// },{
//     id: 'item6',
//     name: 'Vegetables',
//     price: 60,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-6.jpg'
// },{
//     id: 'item7',
//     name: 'Fish',
//     price: 60,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-7.jpg'
// },{
//     id: 'item8',
//     name: 'Cake',
//     price: 120,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-8.jpg'
// },{
//     id: 'item9',
//     name: 'Lobster',
//     price: 100,
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
//     img: 'images/gallery-img-9.jpg'
// }];

// let basket = [];

// let generateCanteen = () => {

//     return (canteen.innerHTML = canteenItemsData.map((x) => {
//         let {id, name, price, desc, img} = x;
//         return `
        
//         <a href="#!" id=product-id-${id} class="gallery-link-canteen">
//             <img src=${img} class="food-img-canteen">
//             <h3 class="food-name-canteen">${name}</h3>
//             <p class="food-description-canteen">${desc}</p>
//             <div class="price-quantity">
//                 <h2>P ${price}</h2>
//                 <div class="buttons-canteen">
//                     <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
//                     <div id=${id} class="quantity">0</div>
//                     <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
//                 </div>
//             </div>
//         </a>
        
//         `
//     })
//     .join(""));
// }
// generateCanteen();

// let increment = (id) => {
//     let selectedItem = id;
//     // console.log(selectedItem.id) - use for selecting the unique id of the item
//     let search = basket.find((x) => x.id === selectedItem.id);

//     if(search === undefined) {
//         basket.push({
//             id: selectedItem.id,
//             item: 1,
//         })
//     } else {
//         search.item += 1;
//     }
//     // console.log(basket);
//     update(selectedItem.id)
// };

// let decrement = (id) => {
//     let selectedItem = id;
//     // console.log(selectedItem.id) - use for selecting the unique id of the item
//     let search = basket.find((x) => x.id === selectedItem.id);

//     // this if preventing negative digit
//     if(search.item === 0) return; 
//     else {
//         search.item -= 1;
//     }
//     // console.log(basket);
//     update(selectedItem.id)
// };

// let update = (id) => {
//     // console.log('the update function is running') - i test the update function here
//     // console.log(id)
//     let search  = basket.find((x) => x.id === id);
//     // console.log(search.item)
//     document.getElementById(id).innerHTML = search.item;

//     calculation();
// };

// let calculation = () => {
//     // console.log('calculation function is running');
//     let cartIcon = document.getElementById("cartAmount")
//     // adding previous and next number to act as one
//     // console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0))
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// }

// for canteen page setting and getting local storage

// for canteen page

// let canteen = document.querySelector('#canteen');

// // let canteenItemsData = [{
// //     id: 'item1',
// //     name: 'Pancakes',
// //     price: 50,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-1.jpg'
// // },{
// //     id: 'item2',
// //     name: 'Cupcakes',
// //     price: 50,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-2.jpg'
// // },{
// //     id: 'item3',
// //     name: 'Hummus',
// //     price: 100,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-3.jpg'
// // },{
// //     id: 'item4',
// //     name: 'Hamburger',
// //     price: 75,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-4.jpg'
// // },{
// //     id: 'item5',
// //     name: 'Salmon',
// //     price: 90,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-5.jpg'
// // },{
// //     id: 'item6',
// //     name: 'Vegetables',
// //     price: 60,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-6.jpg'
// // },{
// //     id: 'item7',
// //     name: 'Fish',
// //     price: 60,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-7.jpg'
// // },{
// //     id: 'item8',
// //     name: 'Cake',
// //     price: 120,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-8.jpg'
// // },{
// //     id: 'item9',
// //     name: 'Lobster',
// //     price: 100,
// //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere porro saepe distinctio cum tempore perferendis.',
// //     img: 'images/gallery-img-9.jpg'
// // }];

// // 2. let basket = []; - we remove the array brackets to retrieve the data from local storage
// let basket = JSON.parse(localStorage.getItem("data")) || [];

// let generateCanteen = () => {

//     return (canteen.innerHTML = canteenItemsData.map((x) => {
//         let {id, name, price, desc, img} = x;
//         // 3. to match the number of item we increment and decrement in application and local storage everytime we reload the page and put it below with element with class quantity
//         let search = basket.find((x) => x.id === id) || [];
//         return `
        
//         <a href="#!" id=product-id-${id} class="gallery-link-canteen">
//             <img src=${img} class="food-img-canteen">
//             <h3 class="food-name-canteen">${name}</h3>
//             <p class="food-description-canteen">${desc}</p>
//             <div class="price-quantity">
//                 <h2>P ${price}</h2>
//                 <div class="buttons-canteen">
//                     <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
//                     <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
//                     <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
//                 </div>
//             </div>
//         </a>
        
//         `
//     })
//     .join(""));
// }
// generateCanteen();

// let increment = (id) => {
//     let selectedItem = id;
//     // console.log(selectedItem.id) - use for selecting the unique id of the item
//     let search = basket.find((x) => x.id === selectedItem.id);

//     if(search === undefined) {
//         basket.push({
//             id: selectedItem.id,
//             item: 1,
//         })
//     } else {
//         search.item += 1;
//     }

// //     // console.log(basket);
//     update(selectedItem.id)
//     // 1. I use this local storage for basket and we need to retrieve the data from local storage
//     localStorage.setItem("data", JSON.stringify(basket));

// };

// let decrement = (id) => {
//     let selectedItem = id;
//     // console.log(selectedItem.id) - use for selecting the unique id of the item
//     let search = basket.find((x) => x.id === selectedItem.id);

//     // 5. I did because anytime the local storage has 0 item the console returns undefined 
//     if(search === undefined) return
//     // this if preventing negative digit
//     else if(search.item === 0) return; 
//     else {
//         search.item -= 1;
//     }
//     // console.log(basket);

//     // 7. this update must be at the top of no.6 because our item must prevent back to zero because the code read line by line
//     update(selectedItem.id)

//     // 6. to remove the item which value 0 from local storage because it doesnt make sense and return the filter data
//     basket = basket.filter((x) => x.item !== 0);


//        // 1. I use this local storage for basket and we need to retrieve the data from local storage
//     localStorage.setItem("data", JSON.stringify(basket));

// };

// let update = (id) => {
//     // console.log('the update function is running') - i test the update function here
//     // console.log(id)
//     let search  = basket.find((x) => x.id === id);
//     // console.log(search.item)
//     document.getElementById(id).innerHTML = search.item;

//     calculation();
// };

// let calculation = () => {
//     // console.log('calculation function is running');
//     let cartIcon = document.getElementById("cartAmount")
//     // adding previous and next number to act as one
//     // console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0))
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// }
// // 4. I do this so everythime I load the data it prints the calculation in cartIcon
// calculation();


// for cart page

// let cartLabel = document.querySelector('#label');
// let shoppingCart = document.querySelector('#shopping-cart');

// let generateCartItems = () => {
//     if(basket.length !== 0) {
 
//         return (shoppingCart.innerHTML = basket.map((x) => {
//             // I want to match the item which is the data.js objects and the basket
//             let {id, item} = x;
//             let search = canteenItemsData.find((y) => y.id === id) || [];
//             let {img, name, price} = search
//             return `
            
//             <div class="chosen-item">
//                 <img width="150" height="150" src=${img} alt="" />
//                 <div class="c-details">
//                     <div class="title-price-x">
//                         <h4 class="title-price-x-h4">
//                             <p class="p1">${name}</p>
//                             <p class="p2">P${price}</p>
//                         </h4>
//                         <i onclick="removeItem(${id})"class="fa-solid fa-x fa-x-cart"></i>
//                     </div>

//                     <div class="buttons-canteen-cart">
//                         <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
//                         <div id=${id} class="quantity">${item}</div>
//                         <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
//                     </div>

//                     <h3 class="c-deatils-h3">P ${item * search.price}</h3>
//                 </div>
//             </div>

//             `
//         }).join(""));

//     }
//     else {

        

//         shoppingCart.innerHTML = ``
//         cartLabel.innerHTML = `
        
//         <h2>No Item(s)</h2>


//         `;

//     }
// }
// generateCartItems();


// let increment = (id) => {
//     let selectedItem = id;
//     let search = basket.find((x) => x.id === selectedItem.id);

//     if(search === undefined) {
//         basket.push({
//             id: selectedItem.id,
//             item: 1,
//         })
//     } else {
//         search.item += 1;
//     }

//     update(selectedItem.id)
//     // it removes the item when it turns 0 
//     generateCartItems();
//     localStorage.setItem("data", JSON.stringify(basket));

// };

// let decrement = (id) => {
//     let selectedItem = id;
//     let search = basket.find((x) => x.id === selectedItem.id);

//     if(search === undefined) return
//     else if(search.item === 0) return; 
//     else {
//         search.item -= 1;
//     }

//     update(selectedItem.id)

//     basket = basket.filter((x) => x.item !== 0);
//     // it removes the item when it turns 0 
//     generateCartItems();
//     localStorage.setItem("data", JSON.stringify(basket));

// };

// let update = (id) => {
//     let search  = basket.find((x) => x.id === id);
//     document.getElementById(id).innerHTML = search.item;

//     calculation();
//     totalAmount();
// };

// let removeItem = (id) => {

//     let selectedItem = id;
//     basket = basket.filter((x) => x.id !== selectedItem.id)
//     generateCartItems()
//     totalAmount();
//     calculation();
//     localStorage.setItem("data", JSON.stringify(basket));
// } 

// let clearCart = () => {
//     basket = []
//     generateCartItems();
//     calculation();
//     localStorage.setItem("data", JSON.stringify(basket));
// } 

// // total amount calculation

// let totalAmount = () => {

//     if(basket.length !== 0) {
//         let amount = basket.map((x) => {
//             let {item, id} = x;
//             let search = canteenItemsData.find((y) => y.id === id) || [];
//             return item * search.price;


//         }).reduce((x, y) => x + y, 0)
//         // console.log(amount);
//         cartLabel.innerHTML = `
        
//         <h2>Total Amount: P ${amount}</h2>
//         <button class="buyItem">BUY</button>
//         <button onclick="clearCart()" class="clearItem">CLEAR</button>

//         `
//     }

// }
// totalAmount();
