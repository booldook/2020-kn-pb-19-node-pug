(function(){

	$(".navi-wrapper .navi").eq(0).hover(onHover, onLeave);
	
	function onHover() {
		$(this).find(".cate-wrapper").stop().slideDown(300);
	}
	
	function onLeave() {
		$(this).find(".cate-wrapper").stop().slideUp(300);
	}

})();