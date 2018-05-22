function SwitchNextTab() {
	browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
		var currIndex = tabs[0].index;
		browser.tabs.query({currentWindow: true}, function (tabs) {
			if (currIndex < tabs.length - 1) {
				browser.tabs.update(tabs[currIndex+1].id, {active: true});
			}
		});
	});
}

function SwitchPrevTab() {
	browser.tabs.query({active: true, currentWindow: true}, function (tabs) {
		var currIndex = tabs[0].index;
		browser.tabs.query({currentWindow: true}, function (tabs) {
			if (currIndex > 0) {
				browser.tabs.update(tabs[currIndex-1].id, {active: true});
			}
		});
	});
}

function MuteUnmuteAll() {
	browser.tabs.query({currentWindow: true}, function (tabs) {
		for (i = 0; i < tabs.length; i++) {
			if (tabs[i].audible) {
//				console.log("muting", tabs[i].index);
				browser.tabs.update(tabs[i].id, {muted: true});
			} else {
//				console.log("unmuting", tabs[i].index);
				browser.tabs.update(tabs[i].id, {muted: false});
			}
		}
	});
}

browser.commands.onCommand.addListener(function(command) {
	if (command == "Next-Tab") {
		SwitchNextTab();
	}
	if (command == "Previous-Tab") {
		SwitchPrevTab();
	}
	if (command == "Mute-Unmute-All") {
		MuteUnmuteAll();
	}
});