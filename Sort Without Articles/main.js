const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function skip(name){
    return name.replace(/^(a |the |an )/i,'').trim();
}

 const sorted = bands.sort(function(a,b){
     if(skip(a)>skip(b))
     return 1;
     else 
     return -1;
 });

 document.querySelector('#bands').innerHTML=sorted.map(band => `<li>${band}</li>`).join(' ');
 