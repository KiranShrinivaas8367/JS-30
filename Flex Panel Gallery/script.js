const panels = document.querySelectorAll('.panel');

// function toggleOpen()
// {
//     // console.log('hello'); debugging purpose
//     this.classList.toggle('open');
    
// }

function toggleopenActive(e){
    // console.log(e.propertyName); debugging purpose
    // if(e.propertyName.includes('flex'))
    // {
    //     this.classList.toggle('open-active');
    // }
    
    this.classList.toggle('open');
    
    setTimeout(()=>
    {
        this.classList.toggle('open-active');
    },300);
}

panels.forEach(panel => panel.addEventListener('mouseenter',toggleopenActive));
panels.forEach(panel => panel.addEventListener('mouseleave',toggleopenActive));
panels.forEach(panel => panel.addEventListener('transitionend',toggleopenActive))
