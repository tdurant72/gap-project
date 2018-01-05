var submitForm = function() {
	var formData = {                    
		'SiteName': "inside",
		'listGUID': "1B302D81-C90D-4822-A44B-B884213F20EB",
		'masterID': "32", 
		'ListItems': $('#formContainer').find('select, textarea, input').serialize()
		//Troubleshooting step 1: confirm listGUID and masterID are identical to your entry on the SMH Config List. ListItems $('#formContainer') should be the container div in your html.
		//https://insidetest.ncdot.gov/Teams/WS/Lists/SMHConfigList/AllItems.aspx
	};
	$.post('https://apps.ncdot.gov/smh/api/form2Sp',formData,function(data) {
		//Troubleshooting step 2: If your form is not submitting, set a breakpoint here and make sure that formData has all of the text that you would expect based on your inputs and values.
	})
	.done(function() {
		//either show submit message or route user to the "thank you for submitting" page
		//showSubmit("success");
		window.location.href = "contact-form-submitted.aspx";
	})
	.fail(function(jqXHR, textStatus, error) {
		showSubmit("fail", error);
			//Troubleshooting step 3: If a network error appears in the console,set a breakpoint here.
			//The variable "error" gives a basic reason for failure, "jqXHR.responseText" gives verbose reason for failure
			//for more info, please visit https://tfs.dot.nc.net/tfs/Web%20Services/Web.UI/_git/SharePoint.FML-V.ForMLess-Validation?path=%2FREADME.md
		});
		//always(function() {})
	};
/*
Other troubleshooting steps: 
- HTML inputs must have a name="" value that is identical to the SharePoint column value. Also make sure that there is only one (not multiple) name="" value on each input.
- Verify that this AD account has contribute permission to your target list on Inside: DOT\dotw-wsnetp01$
- Make sure that Title is entered if this is a required field in your SharePoint list. You can change the field Title in your SharePoint list settings to somethign unique on your form and submit with this name.
*/