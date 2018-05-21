function switchNextTab() {
	browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
    	var currIndex = tabs[0].index;
    	browser.tabs.query({currentWindow: true}, function (tabs) {
       		if (currIndex < tabs.length - 1) {
       			browser.tabs.update(tabs[currIndex+1].id, {active: true});
       		}
    	});
    });
}

function switchPrevTab() {
	browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
   		var currIndex = tabs[0].index;
   		browser.tabs.query({currentWindow: true}, function (tabs) {
       		if (currIndex > 0) {
       			browser.tabs.update(tabs[currIndex-1].id, {active: true});
       		}
   		});
   	});
}

browser.commands.onCommand.addListener(function(command) {
	if (command == "Next-Tab") {
    	switchNextTab();
  	}
  	if (command == "Previous-Tab") {
  		switchPrevTab();
  	}
});