$(document).ready(function(){

	var currentSample = 1;
	$('#back').on('click', function() {
		if (currentSample > 1) {
			currentSample = currentSample - 1;
			$('.samples-photo').toggle();
			$('.samples-photo').html('<img class="img-responsive-height" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('.samples-photo').fadeToggle(1000);
			return(currentSample);
		}else {
			currentSample = 3;
			$('.samples-photo').toggle();
			$('.samples-photo').html('<img class="img-responsive-height" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('.samples-photo').fadeToggle(1000);
			return(currentSample);
		};
	});
	$('#fwd').on('click', function() {
		if (currentSample < 3) {
			currentSample = currentSample + 1;
			$('.samples-photo').toggle();
			$('.samples-photo').html('<img class="img-responsive-height" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('.samples-photo').fadeToggle(1000);
			return(currentSample);
		}else {
			currentSample = 1;
			$('.samples-photo').toggle();
			$('.samples-photo').html('<img class="img-responsive-height" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('.samples-photo').fadeToggle(1000);
			return(currentSample);
		};
	});
	
});