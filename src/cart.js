let cartLabel = document.querySelector('#label');
let shoppingCart = document.querySelector('#shopping-cart');



let basket = JSON.parse(localStorage.getItem("data")) || [];


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation();

let generateCartItems = () => {
    if(basket.length !== 0) {
 
        return (shoppingCart.innerHTML = basket.map((x) => {
            // I want to match the item which is the data.js objects and the basket
            let {id, item} = x;
            let search = canteenItemsData.find((y) => y.id === id) || [];
            let {img, name, price} = search
            return `
            
            <div class="chosen-item">
                <img width="150" height="150" src=${img} alt="" />
                <div class="c-details">
                    <div class="title-price-x">
                        <h4 class="title-price-x-h4">
                            <p class="p1">${name}</p>
                            <p class="p2">PHP${price}</p>
                        </h4>
                        <i onclick="removeItem(${id})"class="fa-solid fa-x fa-x-cart"></i>
                    </div>

                    <div class="buttons-canteen-cart">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>

                    <h3 class="c-deatils-h3">PHP ${item * search.price}</h3>
                </div>
            </div>

            `
        }).join(""));

    }
    else {

        

        shoppingCart.innerHTML = ``
        cartLabel.innerHTML = `
        
        <h2>No Item(s)</h2>


        `;

    }
}
generateCartItems();


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    } else {
        search.item += 1;
    }

    update(selectedItem.id)
    // it removes the item when it turns 0 
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));

};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) return
    else if(search.item === 0) return; 
    else {
        search.item -= 1;
    }

    update(selectedItem.id)

    basket = basket.filter((x) => x.item !== 0);
    // it removes the item when it turns 0 
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));

};

let update = (id) => {
    let search  = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;

    calculation();
    totalAmount();
};

let removeItem = (id) => {

    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id)
    generateCartItems()
    totalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
} 

let clearCart = () => {
    basket = []
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
} 

// total amount calculation

let totalAmount = () => {

    if(basket.length !== 0) {
        let amount = basket.map((x) => {
            let {item, id} = x;
            let search = canteenItemsData.find((y) => y.id === id) || [];
            return item * search.price;


        }).reduce((x, y) => x + y, 0)
        // console.log(amount);
        cartLabel.innerHTML = `
        
        <h2>Total Amount: PHP ${amount}</h2>
        <button class="buyItem">BUY</button>
        <button onclick="clearCart()" class="clearItem">CLEAR</button>

        `
    }

}
totalAmount();

/* <a href="#">
<button onclick="" id="tomealpage" class="mealBtn">Back to Meals</button>
</a> */

// const cartUtensils = document.querySelector('.cart-utensils')
// const cartPage = document.querySelector('.cart-page');
// const canteenPage = document.querySelector('#canteen-page');


// cartUtensils.addEventListener('click', () => {
//     cartPage.style.display = 'none';
//     canteenPage.style.display = 'block';
// })