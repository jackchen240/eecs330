// Global variables
var slideIndex = 1;
// sessionStorage.setItem("testVar", "test1")
showSlides(slideIndex);
// console.log(document.getElementsByClassName("tips-header"))
var tips = ["If you are not making ice cream, raise the temparature a bit!", 
	"Plan your trips to the fridge so you are not standing in front of it with the door open for too long.", 
	"Allow hot foods to cool before putting them in the refrigerator."]


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

function sendTips() {
	var i;
	var tipBoxes = document.getElementsByClassName("tip-inputs");
	var tipOut = []

	for (i = 0; i < tipBoxes.length; i++) {
		if (tipBoxes[i].checked) {
			tipOut.push(tips[i])
		}
	};
	sessionStorage.setItem("tipList", tipOut);
}