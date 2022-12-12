const inputfields = document.querySelectorAll('.input-field');
const toesup_btn = document.querySelectorAll('.to-s-up');
const main = document.querySelector('main');
const bullets = document.querySelectorAll('.bullets span');
const photos = document.querySelectorAll('.photo');


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
        error12.style.display = 'none';
        error22.style.display = 'none';
        name2field.value = '';
        password2Field.value = '';
        name2field.classList.remove('active');
        password2Field.classList.remove('active');
    })

    // loginModal.sytle.display = 'none';
})



bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider = () => {

        let buls = bullet.getAttribute('data-count')

        let currentPhoto = document.querySelector(`.photo-${buls}`);
        photos.forEach(img => img.classList.remove('show'));
        currentPhoto.classList.add('show');

        const textSlider = document.querySelector(".text-group");
        textSlider.style.transform = `translateY(${-(buls - 1) * 4}rem)`;
    

        bullets.forEach(bull => bull.classList.remove("active"));
        bullet.classList.add('active');

        
    })
})


// const form2 = document.querySelector('.form2');
const name1field = document.querySelector('.name-field');
const email1Field = document.querySelector('.email-field');
const password1Field = document.querySelector('.password-field');
const signUpBtn = document.querySelector('.sign-up-btn');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');

const name2field = document.querySelector('.name-field2');
const password2Field = document.querySelector('.password-field2')
const signInBtn = document.querySelector('.sign-in-btn');
const error12 = document.querySelector('.error1-2');
const error22 = document.querySelector('.error2-2');
const loginModal = document.querySelector('.login-modal');
const submitModal = document.querySelector('.submit-modal');
const submitModalBtn = document.querySelector('.submit-btn');

const mainPage = document.querySelector('.main-page');
const signPage = document.querySelector('.signin-page');
const canteenPage = document.querySelector('.canteen-page');

const cartHome = document.querySelector('.cart-home');

signUpBtn.addEventListener('click', (a) => {
    a.preventDefault();

    if(name1field.value == '') {
        error1.style.display = 'flex';
    } else if(email1Field.value == '') {
        error2.style.display = 'flex';
    } else if(password1Field.value == '') {
        error3.style.display = 'flex';
    } else {
        error1.style.display = 'none';
        error2.style.display = 'none';
        error3.style.display = 'none';
        main.classList.remove('sign-up-mode');
        submitModal.style.display = 'block';
        signPage.style.opacity = '.8';
        signPage.style.pointerEvents = 'none';
    }

})

submitModalBtn.addEventListener('click', (submitBtn) => {
    submitBtn.preventDefault()

    submitModal.style.display = 'none';
    signPage.style.opacity = '1';
    signPage.style.pointerEvents = 'auto';
})

signInBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(name2field.value == '') {
        error12.style.display = 'flex';
    } else if(password2Field.value == '') {
        error22.style.display = 'flex';
    } else if(name1field.value !== name2field.value) {
        loginModal.style.display = 'block';
        mainPage.style.display = 'none';
        signPage.style.display = 'flex';
        signPage.style.pointerEvents = 'none';
        signPage.style.opacity = '.8'
    } else if(password1Field.value !== password2Field.value) {
        loginModal.style.display = 'block';
        mainPage.style.display = 'none';
        signPage.style.display = 'flex';
        signPage.style.pointerEvents = 'none';
        signPage.style.opacity = '.8'
    } else {
        error12.style.display = 'none';
        error22.style.display = 'none';
        signPage.style.display = 'none';
        // mainPage.style.display = 'block';
        loginModal.style.display = 'none';
        location.replace('main.html');
    }

})



const loginIcon = document.querySelector('.login-modal i');

loginIcon.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signPage.style.pointerEvents = 'auto';
    signPage.style.opacity = '1';
})