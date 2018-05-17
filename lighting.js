// Global variables
var slideIndex = 1;
showSlides(slideIndex);

function init() {
	

}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("graphs")
	var dots = document.getElementsByClassName("dot")
	if (n > slides.length) {
		slideIndex = slides.length;
	};
	if (n < 1) {
		slideIndex = 1;
	};
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	};

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active"
}

