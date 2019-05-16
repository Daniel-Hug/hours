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

function parseDuration(src) {
  var isHour = src.toUpperCase().indexOf('HOUR') >= 0;
  var isMin = src.toUpperCase().indexOf('MIN') >= 0;
  var num = parseInt(src, 10);
  if (isNaN(num)) num=1;
  if (isHour) return num;
  if (isMin) return num/60;
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
    var inVal = input.value;

    // go through each day
    var days = inVal.split('\n\n');
    days = days.map(function(daySrc) {
        var isLunch = daySrc.toUpperCase().indexOf('NO LUNCH') < 0;
        var isLunchSpecified = isLunch &&  daySrc.toUpperCase().indexOf('LUNCH') >= 0;
        var dayParts = daySrc.split('\n');
        var startT = dayParts[1];
        var endT = dayParts[2];
        var lunchSrc = dayParts[dayParts.length - 1];
        var breakHrs = isLunch ? 0.5 : 0;
        if (isLunchSpecified) breakHrs = parseDuration(lunchSrc);
        var startTParts = startT.split(':');
        var endTParts = endT.split(':');
        var startHour = parseInt(startTParts[0], 10) % 12;
        var endHour = parseInt(endTParts[0], 10) % 12;
        var startMin = startTParts[1] === undefined ? 0 : parseInt(startTParts[1], 10);
        var endMin = endTParts[1] === undefined ? 0 : parseInt(endTParts[1], 10);
        var finHour = endHour >= startHour ? endHour - startHour : 12 - startHour + endHour;
        finHour += (endMin - startMin) / 60;
        var fin = finHour - breakHrs;
        dayParts.push(fin + ' hours');
        return dayParts.join('\n');
    });
	var finSrc = days.join('\n\n');

	// give the output
	output.value = finSrc;
    } catch(err) {
        output.value += err;
    }
});