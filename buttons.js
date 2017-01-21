//formatting.addButtonDispatch() is used here because 
//composer.addButton() is missing the argument for the 
//tooltip title.  This argument was added in composer version 3.0.27.
$('document').ready(function() {
	require(['composer/controls', 'composer/formatting'], function(controls, formatting) {
		formatting.addButtonDispatch('code-button', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '```\nInsert Code Here\n```');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 21);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '```\n','\n```\n');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 4);
			}
		});
	});
});