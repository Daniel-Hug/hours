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

function log(msg) {
    output.value += msg;
}

// handle button click
on(btn, 'click', function() {
    var in = input.value;
});
log('test')