(function(ren){

$.getScript('http://localhost:35729/livereload.js?snipver=1');
$('body').append('<section id="dev"></section>');

 $.get('http://localhost:8080/devTools/devTempate.mustache',function(template){
 ren.dev = function (){
 var object = [];	
 $.each(ren.current.object,function(key,value){
 	object.push({key:key,value:value});
 });

 var data = {
 	item:ren.current.item,
 	object:object,
 	scene:ren.current.scene,
 	label:ren.current.label
 };	
 	 
 Mustache.parse(template);   

	
  var rendered = Mustache.render(template,data);
  $('#dev').html(rendered);

};

 });

function getDevToolsStyle(href){

	var link = document.createElement('link');
		link.rel="stylesheet";
		link.type="text/css";
		link.href = href;
		$('head').append(link);
} 
getDevToolsStyle('http://localhost:8080/devTools/dev-style.css');
	
})(ren);