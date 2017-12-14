$(function(){
	$('.main_items .block').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});
	$('.main_reviews .block').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});
	$('.main_blocks .blocks').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		swipe: false,
		touchMove: false,
		fade: true
	});
	$('.docs_list .block').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});


	$('.main_blocks .urls a').on('click', function(e){
		e.preventDefault();
		$('.main_blocks .urls a.active').removeClass('active');
		$(this).addClass('active');
		var slide=$(this).attr('data-slide');
		$('.main_blocks .blocks').slick('slickGoTo', slide);
	});
});