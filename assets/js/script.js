$(function(){
	
	$('.slide [data-slide-index]').on('click',function(){
		
		var iTargetSlideIndex = $(this).data('slide-index');
		var slide = $(this).parent().parent();
		var iContainerOffset = iTargetSlideIndex * (-1) * slide.width();

		slide.parent().css({transform:'translateX('+iContainerOffset+'px)'});

	});

});








