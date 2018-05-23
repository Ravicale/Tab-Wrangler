function MuteUnmuteAll() {
	browser.tabs.query({currentWindow: true}, function (tabs) {
		for (i = 0; i < tabs.length; i++) {
			if (tabs[i].audible) {
//				console.log("muting", tabs[i].index, " Muted- ", tabs[i].muted, " Audible- ", tabs[i].audible); //It seems like the returned promise doesn't contain the info? Possibly use .then.
				browser.tabs.update(tabs[i].id, {muted: true});
			} else {
//				console.log("unmuting", tabs[i].index, " Muted- ", tabs[i].muted, " Audible- ", tabs[i].audible);
				browser.tabs.update(tabs[i].id, {muted: false});
			}
		}
	});
}

function MuteUnmuteAlmostAll() {
	browser.tabs.query({currentWindow: true}, function (tabs) {
		for (i = 0; i < tabs.length; i++) {
			if (!tabs[i].active) {
//				console.log("muting", tabs[i].index, " Muted- ", tabs[i].muted, " Audible- ", tabs[i].audible);
				browser.tabs.update(tabs[i].id, {muted: true});
			} else {
//				console.log("unmuting", tabs[i].index, " Muted- ", tabs[i].muted, " Audible- ", tabs[i].audible);
				browser.tabs.update(tabs[i].id, {muted: false});
			}
		}
	});
}

browser.commands.onCommand.addListener(function(command) {
	if (command == "Mute-Unmute-All") {
		MuteUnmuteAll();
	}
	if (command == "Mute-Unmute-Almost-All") {
		MuteUnmuteAlmostAll();
	}
});