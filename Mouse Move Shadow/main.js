const hero = document.querySelector('.hero')
const tag = document.querySelector('h1')

function shadow(e){
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const{offsetWidth : width, offsetHeight: height} = hero;
    const{offsetX : x, offsetY: y} = e;   
    // console.log(x,y)  
    console.log(e.target.className)
}

hero.addEventListener('mousemove',shadow);
