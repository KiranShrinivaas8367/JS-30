const nav = document.querySelector('#main')

function navScroll(){
    navtop=nav.offsetTop;
    console.log(navtop,scrollY);
}

window.addEventListener('scroll',navScroll)