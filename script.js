const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registrationlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registrationlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
}); 

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
}); 

document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target) && !btnPopup.contains(e.target)) {
        wrapper.classList.remove('active-popup');
    }
});
