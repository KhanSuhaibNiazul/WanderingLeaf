var international = "no";
var birding = "no";
var national = "no";
var customized = "no";
var corporate = "no";
var oneday = "no";

function filtersClick(id)
{

	// alert(id);
	if (id == "international")
	{

		if (international == "yes")
		{

			international = "no";
			var select = document.getElementById(id);
			select.className = select.className.replace(" active-filter", " ");
		}
		else
		{
			international = "yes";
			var select = document.getElementById(id);
			select.className += " active-filter";
		}
		

	}
	else if (id == "national")
	{
		if (national == "yes")
		{
			national = "no";
			var select = document.getElementById(id);
			select.className = select.className.replace(" active-filter", " ");
		}
		else
		{
			national = "yes";
			var select = document.getElementById(id);
			select.className += " active-filter";
		}
	}
	else if (id == "birding")
	{
		if (birding == "yes")
		{
			birding = "no";
			var select = document.getElementById(id);
			select.className = select.className.replace(" active-filter", " ");
		}
		else
		{
			birding = "yes";
			var select = document.getElementById(id);
			select.className += " active-filter";
		}
	}
	else if (id == "oneday")
	{
		if (oneday == "yes")
		{
			oneday = "no";
			var select = document.getElementById(id);
			select.className = select.className.replace(" active-filter", " ");
		}
		else
		{
			oneday = "yes";
			var select = document.getElementById(id);
			select.className += " active-filter";
		}
	}
	else if (id == "corporate")
	{
		if (corporate == "yes")
		{
			corporate = "no";
			var select = document.getElementById(id);
			select.className = select.className.replace(" active-filter", " ");
		}
		else
		{
			corporate = "yes";
			var select = document.getElementById(id);
			select.className += " active-filter";
		}
	}
	else if (id == "customized")
	{
		if (customized == "yes")
		{
			customized = "no";
			var select = document.getElementById(id);
			select.className = select.className.replace(" active-filter", " ");
		}
		else
		{
			customized = "yes";
			var select = document.getElementById(id);
			select.className += " active-filter";
		}
	}
}

$(document).ready(function() {
	
	

	$(".camp-list").load("get_camps.php", {"international": international, "national": national, "oneday": oneday, "birding": birding, 
												"corporate": corporate, "customized": customized});

});


$(document).ready(function() {
	
	$(".filters").click(function() {

		var id = $(this).attr('id');

		filtersClick(id);

		// alert(international + " " + national + " " +oneday + " " +birding + " " +corporate + " " +customized);

		$(".camp-list").load("get_camps.php", {"international": international, "national": national, "oneday": oneday, "birding": birding, 
												"corporate": corporate, "customized": customized});
	

	});

});

