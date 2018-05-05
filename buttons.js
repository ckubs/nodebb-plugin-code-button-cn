//formatting.addButtonDispatch() is used here because 
//composer.addButton() is missing the argument for the 
//tooltip title.  This argument was added in composer version 3.0.27.
$('document').ready(function() {
	require(['composer/controls', 'composer/formatting'], function(controls, formatting) {
		formatting.addButtonDispatch('code-button', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '```\n请在这里粘贴代码\n```');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 12);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '```\n','\n```\n');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 4);
			}
		});
	});
});
