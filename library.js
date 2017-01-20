'use strict';

var code = {};

code.registerFormatting = function(data, callback) {
	var formatting = [
		{name: 'code', className: 'fa fa-code', title: 'Insert Code'},
	];

	data.options = data.options.concat(formatting);

	callback(null, data);	
}

module.exports = code;