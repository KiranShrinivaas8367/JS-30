const nav = document.querySelector('#main')
navtop=nav.offsetTop;

function navScroll(){
    
    // console.log(navtop,scrollY);
    if(window.scrollY >= navtop){
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        // console.log(nav.offsetHeight + 'px');
        document.body.classList.add('fixed-nav')
    }
    else{
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0
        
    }

}

window.addEventListener('scroll',navScroll);