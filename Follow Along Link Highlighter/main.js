const links = document.querySelectorAll('a');
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightlink(){
    const linkcoords = this.getBoundingClientRect()
    console.log(linkcoords)
    highlight.style.width =`${linkcoords.width}px`;
    highlight.style.height =`${linkcoords.height}px`;
    highlight.style.transform =`translate(200px,200px)`;
}

links.forEach(a=>a.addEventListener('mouseenter',highlightlink))