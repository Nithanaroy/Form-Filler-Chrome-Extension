$(function() {
	$("#fill").click(function() {
		try {
			let data = JSON.parse($("#form_data").val());
			let defaults = {
				"Software Engineering": true,
				"United States": true
			}

			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			    let mergedData = Object.assign({}, defaults, data);
				chrome.tabs.sendMessage(tabs[0].id, {"data": mergedData}, function(response) {
				  console.log(response);
				});
			});
		}
		catch(err) {
			console.error(err);
		}
	});
});