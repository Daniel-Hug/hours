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

	// go through each day
	var days = in.split('\n\n');
	days.forEach(function(daySrc) {
        var dayParts = daySrc.split('\n');
        var startT = dayParts[1];
        var endT = dayParts[2];
        var startTParts = startT.split(':');
        var endTParts = endT.split(':');
        var startHour = parseInt(startTParts[0], 10);
        var endHour = parseInt(endTParts[0], 10);
        var startMin = parseInt(startTParts[1], 10);
        var endMin = parseInt(endTParts[1], 10);
        while(startHour !== endHour)
    });
	

	// give the output
	output.value = lines[0];
});
