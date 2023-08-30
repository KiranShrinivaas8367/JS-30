const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

speed.addEventListener('mousemove',function(e){
    // console.log(e.pageY,this.offsetTop)
    console.log(this.offsetHeight,this.offsetWidth)
    // console.log(`${y}px`);
    const y = e.pageY - this.offsetTop;
    const percentage = y/this.offsetHeight;
    const height = Math.ceil(percentage*100) + '%';
    // console.log(height)
    const min = 0.2;
    const max = 6;
    bar.style.height = height;
    const playbackrate = percentage * (max-min) + min;
    // console.log(playbackrate)
    bar.textContent = playbackrate.toFixed(1)+'x';
    video.playbackRate = playbackrate;
});