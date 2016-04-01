ren.event.dialogBox = function(trigger){
if(trigger==="show"){
	$('#dialog_box').show();
	$('#name_box').show();
}
else if(trigger==="hide"){
	$('#dialog_box').hide();
	$('#name_box').hide();
}

};