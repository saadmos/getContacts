WAF.config.baseURL = "http://@IP_of_the_Wakanda_Server:8081";
WAF.core.restConnect.defaultService = 'cors';
WAF.core.restConnect.baseURL = "http://@IP_of_the_Wakanda_Server:8081";


WAF.onAfterInit = function onAfterInit() { // @lock
	// @region namespaceDeclaration// @startlock
	var documentEvent = {}; // @document
	var button2 = {}; // @button
	var button1 = {}; // @button
	// @endregion// @endlock
	var navView = $$("navigationView1");
	// eventHandlers// @lock
	documentEvent.onLoad = function documentEvent_onLoad(event) // @startlock
	{ // @endlock
		$$("button2").setValue("Get Phone Contacts");
	}; // @lock
	button2.click = function button2_click(event) // @startlock
	{ // @endlock
		var options = new ContactFindOptions(), name, phoneNumber;
		options.filter = "";
		options.multiple = true;

		var fields = ["name", "phoneNumbers"];

		function onSuccess(contacts) {
			var res = "";
			for(var index = 0, len = contacts.length; index < len; index++) {

				name = contacts[index].name;
				name = name != null ? name.formatted : "";
				phoneNumber = contacts[index].phoneNumbers;
				phoneNumber = phoneNumber != null && phoneNumber.length > 0 ? phoneNumber[0].value : "";

				res += name + "   : " + phoneNumber + "\n";
			}
			$$('textField2').setValue(res);

			navView.goToView(3);
		}

		function onError() {
			alert('onError!');
		}

		navigator.contacts.find(fields, onSuccess, onError, options);
	}; // @lock
	button1.click = function button1_click(event) // @startlock
	{ // @endlock
		navView.goToNextView();
	}; // @lock
	// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	// @endregion
}; // @endlock
