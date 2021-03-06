$(document).ready(function(){

	/**
	 * função de mudar de pagina suave quando clica em um link
	 */

	$('.navbar a').click(function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
		$('html, body').animate({
			scrollTop: targetOffset
		},900);
	});

	/**
	 * Função de ativar animação anime1 e anime2
	 */

	debounce = function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};


	(function(){
		var $target = $('.anime1, .anime2'),
				animationClass = 'anime-start',
				offset = $(window).height() * 2/4;

		function animeScroll() {
			var documentTop = $(document).scrollTop();

			$target.each(function(){
				var itemTop = $(this).offset().top;
				if (documentTop > itemTop - offset) {
					$(this).addClass(animationClass);
				} //else {
					//$(this).removeClass(animationClass);
				//}
			});
		}

		animeScroll();

		$(document).scroll(debounce(function(){
			animeScroll();
		}, 25));
	})();

});