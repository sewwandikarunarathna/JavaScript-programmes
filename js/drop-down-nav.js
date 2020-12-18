var navigate = document.getElementById("navigate");

navigate.addEventListener("change", function(){
	//window.open(navigate.value);   in a seperate window
	//window.open(navigate.value, "_self");  in same window
	window.open(navigate.value, "default", "width=700,height=400"); //pop up window
	//console.log(navigate.value);
});