$(document).ready(function(){
	$('#left-sidebar-toggle').click(function(){
	$('.sidebar')
	.sidebar('toggle', ".menu")
})
})


function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	    x.className += " responsive";
	} else {
	    x.className = "topnav";
	}
    }