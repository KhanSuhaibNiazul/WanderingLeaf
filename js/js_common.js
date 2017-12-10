var navVisible = false;

function toggleNavBar()
{
	if (!navVisible)
	{
		var nav = document.getElementsByClassName("small-nav")[0].getElementsByTagName("ul")[0];
		nav.style.display = "block";
		navVisible = true;
	}
	else
	{
		var nav = document.getElementsByClassName("small-nav")[0].getElementsByTagName("ul")[0];
		nav.style.display = "none";
		navVisible = false;
	}
}