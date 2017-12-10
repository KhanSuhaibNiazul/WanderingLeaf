var currentSlide = 0;

function moveToSlide()
{
	var i;
	var slides = document.getElementsByClassName("slide");


	currentSlide = (currentSlide + 1) % slides.length;
	
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none"; 
	}


	slides[currentSlide].style.display = "block"; 

	setTimeout(moveToSlide, 2000)
}