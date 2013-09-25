$(function() {
	$('#tab_2').css("border-radius", "4px");
	$('#tab_1').css("border-radius", "4px");
	$('#tab_1').css("background-color", "rgb(205,205,205)");
	if (!localStorage.tab1) {
		localStorage.tab1 = "name=''";
		console.log("first time setting local storage");
		editor.setValue(localStorage.tab1)
	} else {
		editor.setValue(localStorage.tab1);
	}
		$("#tabs").tabs({
			
			activate: function(evt, ui) {
				console.log(ui.newPanel.selector == "#tab2");
				if (ui.newPanel.selector == "#tab2") {
					console.log("index 0 clicked");
					localStorage.tab1 = editor.getValue();
					editor.setValue(localStorage.tab2);
					$('#tab_2').css("background-color", "rgb(205,205,205)");
					$('#tab_1').css("background-color", "rgb(51,51,51)");
				} else if (ui.newPanel.selector != "#tab2") {
					console.log("index 1 clicked");
					localStorage.tab2 = editor.getValue();
					editor.setValue(localStorage.tab1);
					$('#tab_1').css("background-color", "rgb(205,205,205)");
					
					$('#tab_2').css("background-color", "rgb(51,51,51)");

				}

			}
        });
    });

    $(function() {
    	$(".part1").on("click", function() {
    		$("#paragraph1").hide();
    	});
    });

    $(function() {
    	$(".part2").on("click", function() {
    		$("#paragraph1").show();
    	});
    });
