$(document).ready(function(){

	var currentSample = 1;
	$('#back').on('click', function() {
		if (currentSample > 1) {
			currentSample = currentSample - 1;
			$('#sample').toggle();
			$('#sample').html('<img class="img-responsive-height img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('#sample').fadeToggle(700);
			return(currentSample);
		}else {
			currentSample = 3;
			$('#sample').toggle();
			$('#sample').html('<img class="img-responsive-height img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('#sample').fadeToggle(700);
			return(currentSample);
		};
	});
	$('#next').on('click', function() {
		if (currentSample < 3) {
			currentSample = currentSample + 1;
			$('#sample').toggle();
			$('#sample').html('<img class="img-responsive-height img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('#sample').fadeToggle(700);
			return(currentSample);
		}else {
			currentSample = 1;
			$('#sample').toggle();
			$('#sample').html('<img class="img-responsive-height img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('#sample').fadeToggle(700);
			return(currentSample);
		};
	});
	
});