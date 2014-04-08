$(document).ready(function() {
	$('#button').click(function() {
		$('.i').remove();
		fizzBuzz();
	});
});

function addIt(i) {
	$('.main').append('<div class="i">' + i + '</div>');
}

function fizzBuzz() {
	var max = +$('#text').val();
	for (i = 1; i <= max; i++) {
		if (i%3 === 0 && i%5 === 0) {
			addIt("FizzBuzz");
		} else if (i%3 === 0) {
			addIt("Fizz");
		} else if (i%5 === 0) {
			addIt("Buzz");
		} else {
			addIt(i);
		}
	}
}