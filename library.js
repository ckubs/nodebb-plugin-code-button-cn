'use strict';

var codeButtons = {};

codeButtons.addComposerButton = function(payload, callback) {
	payload.options.push({ name: 'code-button', className: 'fa fa-code', title: "添加代码"});
	callback(null, payload);
};

module.exports = codeButtons;
