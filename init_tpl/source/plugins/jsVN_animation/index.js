vn.event.shake = function(elem){
	$("#"+elem)
		.animate({"left":"+=8px"}, 50)
		.animate({"left":"-=8px"}, 50)
		.animate({"left":"+=8px"}, 50)
		.animate({"left":"-=8px"}, 50);
};

vn.event.bump = function(elem) {
	$("#"+elem).animate({"bottom":"+=8px"}, 50)
		.animate({"bottom":"-=8px"}, 50)
		.animate({"bottom":"+=8px"}, 50)
		.animate({"bottom":"-=8px"}, 50);
}