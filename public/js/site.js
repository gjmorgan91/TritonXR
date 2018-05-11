var slideshowBool = true;

var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var foregrounds = document.getElementsByClassName("foreground");
var backgrounds = document.getElementsByClassName("background");
var slideCount = slides.length;
var dots = document.getElementsByClassName("dot");
var slideTimer;

window.onload = function() {

	if (slideCount != 0) {
		slideTimer = setInterval(function() {
			var i = slideIndex;
			console.log("i is: "+i);
			console.log("before");
			console.log('0 slide: '+slides[0].className);
			console.log('1 slide: '+slides[1].className);
			console.log('2 slide: '+slides[2].className);

			var right = i + 1;
			
			//for reasons unbeknownst to me, % is not working? so check if I exceed array limits
			if (right > slides.length-1) {
				right = 0;
			}
			
			slides[right].className = "slide right";

			slides[i].className = "slide center";

			var left = i - 1;
			if (left < 0) {
				left = slides.length-1;
			}

			slides[left].className = "slide left";

			for (k = 0; k < dots.length; k++) {
			  dots[k].className = dots[k].className.replace(" active", "");
			}

			dots[i].className += " active";
			console.log("active dot is: "+i);

			slideIndex++;
			if (slideIndex > slides.length-1) {
				slideIndex = 0;
			}
			console.log("after");
			console.log('0 slide: '+slides[0].className);
			console.log('1 slide: '+slides[1].className);
			console.log('2 slide: '+slides[2].className);
		},5000);
	}

};

function setSlide(n) {
  showSlide(slideIndex = n);
  window.clearInterval(slideTimer);
}

function showSlide(n) {
	slides[n].className = ("slide center");
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

//var slideTimer = setInterval(slideShow(slideIndex),2000);