function accion(){
    // console.log('Menu navegacion');
    var ancla = document.getElementsByClassName('nav-link');
    for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece'); 
    }
}

const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slide-section");

// console.log(sliderSection)

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 8000);

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1){
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    // console.log(counter)
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    // console.log("slider")  
}

function moveToLeft(){
    counter--;
    if (counter < 0 ){
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    // console.log("slider")   
}