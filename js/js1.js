$(document).ready(function(){

	var currentSample = 1;
	$('#back').on('click', function() {
		if (currentSample > 1) {
			if ((currentSample === 2) || (currentSample === 5)) {
				currentSample = currentSample - 1;
				$('.samples-photo').toggle();
				$('.samples-photo').removeClass('col-xs-8 col-xs-offset-2').addClass('col-xs-12 col-xs-offset-0');
				$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
				$('.samples-photo').fadeToggle(700);
				return(currentSample);
			} else if(currentSample === 4) {
				currentSample = currentSample - 1;
				$('.samples-photo').toggle();
				$('.samples-photo').removeClass('col-xs-12 col-xs-offset-0').addClass('col-xs-8 col-xs-offset-2');
				$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
				$('.samples-photo').fadeToggle(700);
				return(currentSample);
			} else {
				currentSample = currentSample -1;
				$('.samples-photo').toggle();
				$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
				$('.samples-photo').fadeToggle(700);
			};
		} else {
			currentSample = 6;
			$('.samples-photo').toggle();
			$('.samples-photo').removeClass('col-xs-12 col-xs-offset-0').addClass('col-xs-8 col-xs-offset-2');
			$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('.samples-photo').fadeToggle(700);
			return(currentSample);
		};
	});
	$('#next').on('click', function() {
		if (currentSample < 6) {
			if ((currentSample === 1) || (currentSample === 4)) {
				currentSample = currentSample + 1;
				$('.samples-photo').toggle();
				$('.samples-photo').removeClass('col-xs-12 col-xs-offset-0').addClass('col-xs-8 col-xs-offset-2');
				$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
				$('.samples-photo').fadeToggle(700);
				return(currentSample);
			} else if(currentSample == 3) {
				currentSample = currentSample + 1;
				$('.samples-photo').toggle();
				$('.samples-photo').removeClass('col-xs-8 col-xs-offset-2').addClass('col-xs-12 col-xs-offset-0');
				$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
				$('.samples-photo').fadeToggle(700);
				return(currentSample);
			} else {
				currentSample = currentSample + 1;
				$('.samples-photo').toggle();
				$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
				$('.samples-photo').fadeToggle(700);
			}
		} else {
			currentSample = 1;
			$('.samples-photo').toggle();
			$('.samples-photo').removeClass('col-xs-8 col-xs-offset-2').addClass('col-xs-12 col-xs-offset-0');
			$('#sample').html('<img class="img-responsive img-rounded" src="images/sample' + currentSample + '.jpg" alt="Responsive image">');
			$('.samples-photo').fadeToggle(700);
			return(currentSample);
		};
	});
	
});