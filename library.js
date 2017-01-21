'use strict';

var codeButtons = {};

codeButtons.registerFormatting = function(data, callback) {
	var formatting = [
		{name: 'code', className: 'fa fa-code', title: '[[codeButtons:code]]'},
	];

	data.options = data.options.concat(formatting);

	callback(null, data);	
}

module.exports = codeButtons;