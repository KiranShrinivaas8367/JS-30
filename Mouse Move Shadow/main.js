const hero = document.querySelector('.hero')
const tag = document.querySelector('h1')
const walk = 200
function shadow(e)
{
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const{offsetWidth : width, offsetHeight: height} = hero;
    const{offsetX : x, offsetY: y} = e;   
     
    // console.log(e.target.className)
    if(this !== e.target)
    {
        x= x + e.target.offsetLeft;
        y= y + e.target.offsetTop;
    }
    // console.log(x,y) 
    const xwalk=Math.round((x/width * walk) - (walk/2));
    const ywalk=Math.round((y/height * walk) - (walk/2));
    // console.log(xwalk,ywalk)
    tag.style.textShadow = `${xwalk * -1}px ${ywalk}px 0 rgba(66, 195, 199, 0.6),
    ${xwalk *-1}px ${ywalk}px 0 rgba(66, 199, 81, 0.6),
    ${xwalk}px ${ywalk * -1}px 0 rgba(21, 50, 99, 0.6),
    ${xwalk}px ${ywalk}px 0 rgba(194, 177, 52, 0.62)`;
}


hero.addEventListener('mousemove',shadow);
