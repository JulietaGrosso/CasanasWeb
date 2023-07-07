let actualSlide = 0;
const SlideImages = ["1.jpg", "COSECH.jpg", "Panel-solar-.jpg", "sembradora.jpg", "tractorcosechadora.jpg"];
const SlideMessages = [
    "¿Quienes somos?", 
    "Ver cosechadoras",
    "Ver paneles solares",
    "Ver sembradoras",
    "Ver tractores"
];

const SlideLink = [
    "./informacion.html", 
    "./productos.html",
    "./productos.html",
    "./productos.html",
    "./productos.html"
];

function reloadSliderImage() {
    let button = document.getElementById("SliderButton");
    let inicio = document.getElementById("inicio");

    inicio.style.background = "url(./images/" + SlideImages[actualSlide] + ")";
    inicio.style.backgroundPosition = "center";
    inicio.style.backgroundSize = "cover";
    button.href = SlideLink[actualSlide];
    button.innerHTML = SlideMessages[actualSlide];
}

function handleImage() {
    let max = SlideImages.length;
    if ( ++actualSlide >= SlideImages.length ) actualSlide = 0;
    reloadSliderImage();
}

function nextImage() {
    let max = SlideImages.length;
    if ( ++actualSlide >= SlideImages.length ) actualSlide = 0;
    reloadSliderImage();
}

function backImage() {
    let max = SlideImages.length;
    if ( --actualSlide < 0 ) actualSlide = SlideImages.length - 1;
    reloadSliderImage();
}


if ( true ) {
    setInterval( 
        () => {
            handleImage();
        },
        8000
    );
}