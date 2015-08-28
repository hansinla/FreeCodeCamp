var end = function(str, target) {
	return (str.slice( -target.length) === target);
};

debug(end('Bastian', 'ian'));