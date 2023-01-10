const links = document.querySelectorAll('a');
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightlink(){
    const linkcoords = this.getBoundingClientRect()
    console.log(linkcoords)
}

links.forEach(a=>a.addEventListener('mouseenter',highlightlink))