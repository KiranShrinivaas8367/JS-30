const hero = document.querySelector('.hero')
const tag = document.querySelector('h1')

function shadow(e){
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const{offsetWidth : width, offsetHeight: height} = hero;
    const{offsetX : x, offsetY: y} = e;   
     
    // console.log(e.target.className)
    if(this !== e.target){
        x+=e.target.offsetLeft
        y+=e.target.offsetTop
    }
    console.log(x,y) 
}

hero.addEventListener('mousemove',shadow);
