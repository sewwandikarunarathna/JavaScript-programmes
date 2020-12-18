/*window.addEventListener("load", function(){
	document.querySelector(".loader").classList.add("hidden"); //no need array bcoz first item is selected
});*/

//jQuery syntax
$(window).on("load", function(){ 
	$('.loader').hide();
})