const hamberger = document.getElementById("hamberger-menu");
const topLine = document.getElementById("top");
const bottomLine = document.getElementById("bottom");
const hamLinks =  document.getElementById("ham-links");

let count = 0;
hamberger.addEventListener('click', function(){
    count += 1;
    if(count % 2 == 1){
        topLine.style.transform = 'rotate(45deg)';
        bottomLine.style.transform = 'rotate(-45deg)';
        bottomLine.style.position = 'relative';
        bottomLine.style.bottom = '9px';
        hamLinks.style.display = "flex"
        hamLinks.offsetHeight;
        hamLinks.style.opacity = 1;
    }
    else{
        topLine.style.transform = 'rotate(0)';
        bottomLine.style.transform = 'rotate(0)';
        bottomLine.style.position = 'relative';
        bottomLine.style.bottom = '0px';
        hamLinks.style.display = "none"
        hamLinks.style.opacity = 0;
    }
});