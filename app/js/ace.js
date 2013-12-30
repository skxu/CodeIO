	var editorContainer = document.getElementById('editor');
	var editor = ace.edit(editorContainer);
	canvas_focus = false;
	$(document).keyup(function (e) {
	    if (e.which === 9 && e.shiftKey) {
	        if (canvas_focus == false) {
	        	if (typeof Q != "undefined") {
	        		Q.el.focus();
	        	}
	        }
	    }
	});
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setUseWorker(false);
	editor.getSession().setMode("ace/mode/python");
	editor.setPrintMarginColumn(false);
	editor.setValue(sessionStorage.tab2);

