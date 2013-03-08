
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
				var options = new ContactFindOptions();
				options.filter = "";
				var fields = ["name", "phoneNumbers"];



				navigator.service.contacts.find(fields, onSuccess, onError, options);

			function onSuccess(contacts) {
				var res = "";
		    for (var index = 0; index < contacts.length; index++) {
		    	
		        var name = contacts[index].name.formatted;
				var phoneNumber = contacts[index].phoneNumbers[0].value;

		        res+= name + "   : " + phoneNumber + "\n";
		        
		    }
		    
		    $$('textField2').setValue(res);
		};

		function onError() {
		    alert('onError!');
		};
		
			
	
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$("navigationView1").goToView(3);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$("navigationView1").goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
