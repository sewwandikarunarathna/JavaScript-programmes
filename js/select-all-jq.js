$(document).ready(function(){ //normally used in jQuery
	$('#selall').on("click", function(event){
		event.preventDefault();
		$('.chkbx').prop("checked", true);
	});

	$('#selnon').on("click", function(event){
		event.preventDefault();
		$('.chkbx').prop("checked", false);
	});
});