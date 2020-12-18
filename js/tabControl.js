function showTab(tabNum){
	console.log(tabNum);
	document.getElementsByClassName("show")[0].classList.add("hide"); //give hide class to the items currently showing.
	document.getElementsByClassName("show")[0].classList.remove("show"); //now remove show class from these items.
	document.getElementById("content-" + tabNum).classList.add("show"); //then show the clicked tab.
	document.getElementById("content-" + tabNum).classList.remove("hide"); //then remove the hide class of clicked tab.
	document.getElementsByClassName("active")[0].classList.remove("active"); //remove active class from current active tabs.
	document.getElementById("tab-" + tabNum).classList.add("active"); //then active clicked tab.

}