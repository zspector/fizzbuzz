$(document).ready(function() {
	$('#button').click(function() {
		fizzBuzz();
	});
});

function addIt(i) {
	$('.main').append('<div>' + i + '</div>');
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