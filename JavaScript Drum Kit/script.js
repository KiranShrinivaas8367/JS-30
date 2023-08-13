function audiosound(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // changeaudioheader(key);
    if(!audio) return;
    audio.currentTime=0;
    audio.play()
    key.classList.add('playing');
    const span = key.querySelector('.sound');
    const p = document.querySelector('.audio-name');
    p.textContent = span.textContent.toUpperCase(); 
};


function changeaudioheader(e){
    console.log(e.currentTarget,e.target);
    console.dir(e.currentTarget);
    
    const key = e.currentTarget;
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    // const kbd = key.querySelector('kbd');
    // const dataKey = kbd.textContent;
    const span = key.querySelector('.sound');
    const p = document.querySelector('.audio-name');
    p.textContent = span.textContent.toUpperCase();
};

function removeTransition(e){
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
console.log(keys);

window.addEventListener('keydown',audiosound);
keys.forEach((key)=>{
    console.log(key);
    key.addEventListener('click',changeaudioheader);   
    key.addEventListener('transitionend',removeTransition);
    
});
