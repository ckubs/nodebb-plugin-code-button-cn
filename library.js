'use strict';

var codeButtons = {};

codeButtons.addComposerButton = function(payload, callback) {
	payload.options.push({ name: 'code-button', className: 'fa fa-code', title: "Insert Code Block"});
	callback(null, payload);
};

module.exports = codeButtons;