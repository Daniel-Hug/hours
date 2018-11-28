/* DOM helpers
**************************************/

// Get element by CSS selector
function qs(selector, scope) {
	return (scope || document).querySelector(selector);
}

// Add event listeners
function on(target, type, callback, useCapture) {
	target.addEventListener(type, callback, !!useCapture);
}



// get elements
var btn = qs('#go');
var input = qs('#input');
var output = qs('#output');

// handle button click
on(btn, 'click', function() {
	// get the input text
	var in = input.value;

	// go through each line
	var lines = in.split('\n');
	
	

	// give the output
	output.value = lines[0];
});
