	var editorContainer = document.getElementById('editor');
	var editor = ace.edit(editorContainer);
	canvas_focus = false;
	$(document).keydown(function (e) {
	    if (e.which === 113) {
        	if (typeof Q != "undefined") {
	    		Q.el.focus();
        	}
	    }
	});
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setUseWorker(false);
	editor.getSession().setMode("ace/mode/python");
	editor.setPrintMarginColumn(false);
	editor.setValue(sessionStorage.tab2);

