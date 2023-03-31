const sm = document.querySelector('.social-media')
const btn = document.querySelector('.share-btn')

btn.addEventListener('click', (e) => { 
    if (window.matchMedia("(min-width: 768px)").matches) {
        //get mouse position
        sm.classList.toggle('active-in-desktop')

    }
    else {
        sm.classList.toggle('active-in-mobile')
    }
})
