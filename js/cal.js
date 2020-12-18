
function insert(number){
	document.form.screen.value=document.form.screen.value+number;
}

function equal(){
	var ans=document.form.screen.value;
	if (ans) {
		document.form.screen.value=eval(ans);
	}
	
}

function clean(){
	document.form.screen.value="";
}

function back(){
	var ans=document.form.screen.value;
	document.form.screen.value= ans.substring(0,ans.length-1);
}