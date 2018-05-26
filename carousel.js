var bsn = require('bootstrap.native/dist/boostrap-native-v4'); // Create a Carousel instance 
var myCarousel = new bsn.Carousel(element, options);

// grab the carousel element
var myCarousel = document.getElementById('myCarousel');

// initialize with some options
var myCarouselInit = new Carousel(myCarousel, { // these options values will override the ones set via DATA API 
    interval: false,
    pause: false,
    keyboard: false
});

// use getActiveIndex()
var currentActiveItem = myCarouselInit.getActiveIndex();

// jump to a certain item
myCarouselInit.slideTo(2);

// if the carousel was set with `interval: false`
// we can do this to go to the next item
myCarouselInit.cycle();

// get some carousel item and reference the initialization
var mySpecialCarouselInit = document.getElementById('mySpecialCarousel').Carousel;

// apply methods
mySpecialCarouselInit.cycle();

// grab the myCarousel on top of the page
var mainSlider = document.getElementById('myCarousel');

// also reference its items in an array
var mainSliderItems = mainSlider.querySelectorAll('.item');

// use the `slide.bs.carousel` event to remove the `slide` class
// FROM the div.carousel-caption of the newly activated item
mainSlider.addEventListener('slide.bs.carousel', function (e) {
    // the Carousel compoenent also stores initialization in the targeted element object
    var currentActiveIndex = mainSlider.Carousel.getActiveIndex();
    var activeCaption = mainSliderItems[currentActiveIndex].querySelector('.carousel-caption');
    activeCaption.classList.remove('slide');
});

// use the `slid.bs.carousel` event to add the `slide` class 
// TO the div.carousel-caption of the newly activated item
mainSlider.addEventListener('slid.bs.carousel', function (e) {
    // e.relatedTarget is the newly activated item
    var activeCaption = e.relatedTarget.querySelector('.carousel-caption');
    activeCaption.classList.add('slide');
});

// read direction set by the last transition 
var slideDirection = mainSlider.Carousel.direction;

// read it when `slide.bs.carousel` is triggered
mainSlider.addEventListener('slide.bs.carousel', function (e) {
    slideDirection = mainSlider.Carousel.direction;

    // now do something you need with slideDirection before transition
});

// read it when `slid.bs.carousel` is triggered
mainSlider.addEventListener('slid.bs.carousel', function (e) {
    slideDirection = mainSlider.Carousel.direction;

    // now do something you need with slideDirection after transition
});