console.log('FF: Loaded content script');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	let form = request.data;
	let fieldsNotFound = []
	$('label').each(function() {
		let labelText = $(this).text().trim();
		let fieldId = $(this).attr('for');
		
		if(form[labelText]) {
			let fieldRef = $(`#${fieldId}`);
			let fieldType = fieldRef.prop("tagName");
			fieldType = fieldType === "INPUT" ? fieldRef.attr('type') : fieldType;

			switch(fieldType) {
				case "checkbox":
				case "CHECKBOX": 	fieldRef.attr({"checked": true});
									break;

				case "SELECT": 		fieldRef.children("option").each(function() { 
										if($(this).text().trim() === form[labelText]) { 
											$(this).prop("selected", true) 
										} 
									});
									break;

				default: 			fieldRef.val(form[labelText]);
									break;
			}
		}
		else {
			fieldsNotFound.push(labelText);
		}
	});
	console.log(`FF: Fields not filled - ${fieldsNotFound.join(",")}`)
	// sendResponse({response: "Got it"});
});