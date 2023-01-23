const hero = document.querySelector('.hero')
const tag = document.querySelector('h1')
const walk = 200
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
    // console.log(x,y) 
    const xwalk=Math.round((x/width * walk) - (walk/2));
    const ywalk=Math.round((y/height * walk) - (walk/2));
    // console.log(xwalk,ywalk)
}


hero.addEventListener('mousemove',shadow);
