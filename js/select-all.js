var checkboxes = document.getElementsByClassName("chkbx");
var selectAll = document.getElementById("selall");
var selectNone = document.getElementById("selnon");

selectAll.addEventListener("click", function(event){
	event.preventDefault(); // to prevent again refresh when click all checkboxes
	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = true;
	}
});

selectNone.addEventListener("click", function(event){
	event.preventDefault(); // to prevent again refresh when click all checkboxes
	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = false;
	}
});