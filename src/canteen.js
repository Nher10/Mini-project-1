let canteen = document.querySelector('#canteen');


let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateCanteen = () => {

    return (canteen.innerHTML = canteenItemsData.map((x) => {
        let {id, name, price, desc, img} = x;
        // 3. to match the number of item we increment and decrement in application and local storage everytime we reload the page and put it below with element with class quantity
        let search = basket.find((x) => x.id === id) || [];
        return `
        
        <a href="#!" id=product-id-${id} class="gallery-link-canteen">
            <img src=${img} class="food-img-canteen">
            <h3 class="food-name-canteen">${name}</h3>
            <p class="food-description-canteen">${desc}</p>
            <div class="price-quantity">
                <h2>PHP ${price}</h2>
                <div class="buttons-canteen">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </a>
        
        `
    })
    .join(""));
}
generateCanteen();

let increment = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id) - use for selecting the unique id of the item
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    } else {
        search.item += 1;
    }

//     // console.log(basket);
    update(selectedItem.id)
    // 1. I use this local storage for basket and we need to retrieve the data from local storage
    localStorage.setItem("data", JSON.stringify(basket));

};

let decrement = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id) - use for selecting the unique id of the item
    let search = basket.find((x) => x.id === selectedItem.id);

    // 5. I did because anytime the local storage has 0 item the console returns undefined 
    if(search === undefined) return
    // this if preventing negative digit
    else if(search.item === 0) return; 
    else {
        search.item -= 1;
    }
    // console.log(basket);

    // 7. this update must be at the top of no.6 because our item must prevent back to zero because the code read line by line
    update(selectedItem.id)

    // 6. to remove the item which value 0 from local storage because it doesnt make sense and return the filter data
    basket = basket.filter((x) => x.item !== 0);


       // 1. I use this local storage for basket and we need to retrieve the data from local storage
    localStorage.setItem("data", JSON.stringify(basket));

};

let update = (id) => {
    // console.log('the update function is running') - i test the update function here
    // console.log(id)
    let search  = basket.find((x) => x.id === id);
    // console.log(search.item)
    document.getElementById(id).innerHTML = search.item;

    calculation();
};

let calculation = () => {
    // console.log('calculation function is running');
    let cartIcon = document.getElementById("cartAmount")
    // adding previous and next number to act as one
    // console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0))
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}
// 4. I do this so everythime I load the data it prints the calculation in cartIcon
calculation();