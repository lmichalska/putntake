
//----------------|
// read more lakes|
//----------------|
document.addEventListener('DOMContentLoaded', () => {
  const threeDots = document.getElementById("dotz");
  const text = document.getElementById("appear");
  const readMoreBtn = document.getElementById("read-more");

  readMoreBtn.addEventListener('click', () => {
    threeDots.classList.toggle('show'); // makes 3 dots "..." disappear
    text.classList.toggle('show'); // makes the hidden 'extra' text visible

    if (readMoreBtn.textContent === "READ MORE") {
      readMoreBtn.textContent = "READ LESS";
    } else {
      readMoreBtn.textContent = "READ MORE";
    }
  });
});



//--------------|
// the carousel |
//--------------|


var slidePosition = 1;
SlideShow(slidePosition);

//-----------------------|
// forward/back controls |
//-----------------------|
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function currentSlide(n) {
  SlideShow(slidePosition = n);
}

//-------------------------------|
// links to fish in the carousel |
//-------------------------------|
var href = window.location.href;
var parts = href.split('#');


if (parts.length > 1) {
  var fragment = parts[1];
  var slideNumber = parseInt(fragment);


  if (!isNaN(slideNumber)) {
    slidePosition = slideNumber; 
    SlideShow(slidePosition); 
  } else {
    console.log("Invalid slide number.");
  }
} else {
  console.log("No fragment identifier found in the URL.");
}



//------------------------------------------------|
// dots under images and visibility of containers |
//------------------------------------------------|
function SlideShow(slideNumber) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  var circles2 = document.getElementsByClassName("dots2");
  var circles3 = document.getElementsByClassName("dots3");
  var circles4 = document.getElementsByClassName("dots4");
  var circles5 = document.getElementsByClassName("dots5");
  var circles6 = document.getElementsByClassName("dots6");
  var circles7 = document.getElementsByClassName("dots7");
  if (slideNumber > slides.length) {slidePosition = 1}
  if (slideNumber < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  for (i = 0; i < circles2.length; i++) {
    circles2[i].className = circles2[i].className.replace(" enable", "");
}
for (i = 0; i < circles3.length; i++) {
  circles3[i].className = circles3[i].className.replace(" enable", "");
}
for (i = 0; i < circles4.length; i++) {
  circles4[i].className = circles4[i].className.replace(" enable", "");
}
for (i = 0; i < circles5.length; i++) {
  circles5[i].className = circles5[i].className.replace(" enable", "");
}
for (i = 0; i < circles6.length; i++) {
  circles6[i].className = circles6[i].className.replace(" enable", "");
}
for (i = 0; i < circles7.length; i++) {
  circles7[i].className = circles7[i].className.replace(" enable", "");
}
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
  circles2[slidePosition-1].className += " enable";
  circles3[slidePosition-1].className += " enable";
  circles4[slidePosition-1].className += " enable";
  circles5[slidePosition-1].className += " enable";
  circles6[slidePosition-1].className += " enable";
  circles7[slidePosition-1].className += " enable";
} 







