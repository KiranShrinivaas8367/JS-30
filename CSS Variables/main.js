const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change',Update));
inputs.forEach(input => input.addEventListener('mousemove',Update));


function Update(){
    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

/*<-----Debugging Purpose ------------>*/
     //console.log(this.dataset)
    // console.log(suffix, this.name, this.value)
    // this.dataset.value = `${this.value}${suffix}`;
    // console.log(this.value,suffix);