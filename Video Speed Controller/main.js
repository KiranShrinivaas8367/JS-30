const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

speed.addEventListener('mousemove',function(e){
    // console.log(e.pageY,this.offsetTop)
    // console.log(this.offsetHeight)
    const y = e.pageY - this.offsetTop;
    // console.log(`${y}px`);
    const percentage = y/this.offsetHeight;
    const height = Math.ceil(percentage*100);
    console.log(height + '%')
});