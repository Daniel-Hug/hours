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
on(btn, 'click', function() {try{
	// get the input text
	var in = input.value;

	// go through each day
	var days = in.split('\n\n');
	days = days.map(function(daySrc) {
        var dayParts = daySrc.split('\n');
        var startT = dayParts[1];
        var endT = dayParts[2];
        var startTParts = startT.split(':');
        var endTParts = endT.split(':');
        var startHour = parseInt(startTParts[0], 10) % 12;
        var endHour = parseInt(endTParts[0], 10) % 12;
        var startMin = parseInt(startTParts[1], 10);
        var endMin = parseInt(endTParts[1], 10);
        var finHour = 0;
        var finMin = 0;
        for(var minCounter=startMin; minCounter !== endMin; minCounter = (minCounter + 1) % 60) {
            finMin++;
        }
        for(var hourCounter=startHour; hourCounter !== endHour; hourCounter = (hourCounter + 1) % 12) {
            finHour++;
        }
        var fin = finHour + finMin / 60;
        return daySrc + fin;
    });
	var finSrc = days.join('');

	// give the output
	output.value = finSrc;
    } catch(err) {
        output.value += err;
    }
});
log('test')