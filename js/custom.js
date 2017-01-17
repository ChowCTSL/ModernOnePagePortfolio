$(document).ready(function(){
	//scroll when the learn more anchor button is clicked
	$("a[href^='#']").on('click', function(e) {
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	//ensure all links do not remain depressed after pressing
	$("a").click(function() {
		$(this).blur();
	});

}); 