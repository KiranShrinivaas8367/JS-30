const hero = document.querySelector('.hero')
const tag = document.querySelector('h1')

function shadow(e){
    console.log(e);
}

hero.addEventListener('mousemove',shadow);
