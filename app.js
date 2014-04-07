$(document).ready(function() {
	$('input').click(function() {
		fizzBuzz();
	});
});

function addIt(i) {
	$('.main').append('<div>' + i + '</div>');
}

function fizzBuzz() {
	for (i = 1; i < 101; i++) {
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