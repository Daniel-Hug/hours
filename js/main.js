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
	// Create a new SuffixTree from the input text
	var root = new SuffixTree(input.value);

	// Get the longest repeated substring
	var substring = root.node.getLongestRepeatedSubString();

	// place the substring in the output
	output.value = substring;
});