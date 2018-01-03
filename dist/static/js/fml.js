var fmlFunctions = (function() {
	"use strict";
	var fmlFunctions = {};
	$(document).ready(function () {
	//detect if CORS is supported
	if ('withCredentials' in new XMLHttpRequest()) {
    	//CORS is supported
    }
    else {
		//CORS is not supported, replace form inputs with instructions to use a newer browser.
		$("#formContainer").text("This browser is not supported. Please visit this page on a modern browser.");
	}
	$('#submitFormButton').on('click', function () {
		if (!validateFields()){
			//There are invalid fields
			return;
		}
		//Fields validated successfully, now submit the form. See smh.js
		submitForm();	
		$("#submitFail").hide();
		$("#submittingSpinner").show();
		$("#submitFormText")[0].innerHTML = "Submitting Form";
		$("#submitFormText").show();	
	});
	//when user selects value from datepicker, we have to hide validation warning message about date formatting
	if ($("#Date").length) { 
		$("#Date").datepicker({
			onSelect: function() {
				$("#DateFormatText").hide();
			}
		});
		$("#Date").datepicker('setDate', new Date());
	}
});

	function validateFields() {
		$("#validFieldsText").show();
		$("#fieldsValidating").show();
		var invalidFields = [];

	//loop through each type of input validation -- remove the function call if you aren't validating any of this type of input
	$(".validateBlank").each(function() {
		checkField(this, "blank");
	});

	$(".validateDate").each(function() {
		checkField(this, "date");
	});

	$(".validateSelect").each(function() {
		checkField(this, "select");
	});
	
	$(".validateCheck").each(function() {
		checkField(this, "checkbox");
	});
	
	$(".validateCheckSeries").each(function() {
		checkField(this, "checkSeries");
	});
	
	if($("#VehicleYear").val() >= 1981) {
		//VINs only became standard in 1981, we don't validate for 1980 and earlier
		checkField("#VIN", "VIN");
	}

	//you need to call checkField("nameOfThisSetOfRadioButtons", "radio") for each set of radio buttons.
	if ($(".validateRadio").length) {
		checkField("radioButtonExample", "radio");
	}

	$(".validateNoSpecial").each(function() {
		checkField(this, "specialCharacter");
	});

	if (!invalidFields.length) {
		//if all fields are valid
		$("#fieldsValidating").hide();
		$("#fieldsInvalid").hide();
		$("#fieldsValid").show();
		$("#validFieldsText")[0].innerHTML = "Fields Validated";
		return true;	
	}
	else {
		invalidWarning();
		//scroll to the first invalid element that went through checkField, ideally at the top of the page. This can be removed if your form doesn't take up a full screen length (no vertical scroll) or it looks bad on your form. Speed can be adjusted as well (default 500). With the current order
		$('html, body').animate({
			scrollTop: $(invalidFields[0]).offset().top -100
		}, 500);
	}

//closure - this needs to stay inside of the validateFields function so that invalidFields array is in scope
function checkField(thisField, typeCheck) {
	//input field, validation type
	if(typeCheck == "blank") {
		if (isBlankOrWhitespace($(thisField).val())) {
			invalidFields.push(thisField);
			$("#validation-warning").show();
				//show validation message
				$(thisField).siblings(".required-warning").show();

		    	//listen for when input loses focus to remove validation message
		    	$(thisField).blur(function() {
		    		hideInvalidWarnings();
		    		if (isBlankOrWhitespace($(thisField).val())) {
		    			$(thisField).siblings(".required-warning").show();
		    		}
		    		else {
		    			$(thisField).siblings(".required-warning").hide();
		    		}
		    	});
		    	return false;
		    }
		}
		if (typeCheck == "checkbox") {
			if (!$(thisField).is(":checked")) {
				invalidFields.push(thisField);
				$("#validation-warning").show();
				//show validation message
				$(thisField).siblings(".required-warning").show();

		    	//listen for when input loses focus to remove validation message
		    	$(thisField).off().change(function() {
		    		hideInvalidWarnings();
		    		if (!this.checked) {
		    			$(thisField).siblings(".required-warning").show();
		    		}
		    		else {
		    			$(thisField).siblings(".required-warning").hide();
		    		}
		    	});
		    	return false;
		    }
		}
		
		if(typeCheck == "select") {
			if(!$(thisField).val()) {
				invalidFields.push(thisField);
				$("#validation-warning").show();
				//show validation message
				$(thisField).siblings(".required-warning").show();
				$(thisField).change(function() {
					hideInvalidWarnings();
					if(!$(thisField).val()) {
						$(thisField).siblings(".required-warning").show();
					}
					else {
						$(thisField).siblings(".required-warning").hide();
					}
				});
				return false;
			}
		}
		if(typeCheck == "date") {
			if (isBlankOrWhitespace($(thisField).val())) {
				invalidFields.push(thisField);
				$("#validation-warning").show();
			//show validation message
			$(thisField).siblings(".required-warning").show();

		    	//listen for when input loses focus to remove validation message
		    	$(thisField).blur(function() {
		    		hideInvalidWarnings();
		    		if (isBlankOrWhitespace($(thisField).val())) {
		    			$(thisField).siblings(".required-warning").show();
		    			$(thisField).siblings(".date-formatting-warning").hide();
		    		}
		    		else {
		    			$(thisField).siblings(".required-warning").hide();
		    		}
		    	});
		    	return false;
		    }
		    var date_regex = /^\d{2}\/\d{2}\/\d{4}$/ ;
		    if (!date_regex.test($(thisField).val())) {
				//field has an invalid date format
				invalidFields.push(thisField);
				$("#validation-warning").show();
				//show validation message
				$(thisField).siblings(".date-formatting-warning").show();
				//listen for when input loses focus to remove validation message
				$(thisField).blur(function() {
					hideInvalidWarnings();
					if (isBlankOrWhitespace($(thisField).val())) {
						$(thisField).siblings(".required-warning").show();
						$(thisField).siblings(".date-formatting-warning").hide();
						return false;
					}
					if (!date_regex.test($(thisField).val())) {
						$(thisField).siblings(".date-formatting-warning").show();
						$(thisField).siblings(".required-warning").hide();
					}
					else {
						$(thisField).siblings(".date-formatting-warning").hide();
					}
				});
				return false;
			}
		}

		//custom typecheck conditions - probably less common than blank, date, select, and invidual checkbox
		if (typeCheck == "specialCharacter") {
			if (isBlankOrWhitespace($(thisField).val())) {
				return;
			}
			if (!textContainsNoSpecialCharacters($(thisField).val())) {
				invalidFields.push(thisField);
				$("#validation-warning").show();
				//warn the user that they have entered invalid characters in this field
				$(thisField).siblings(".characters-warning").show();
				$(thisField).off().change(function() {
					hideInvalidWarnings();
					if (!textContainsNoSpecialCharacters($(thisField).val())) {
						$(thisField).siblings(".characters-warning").show();
					}
					else {
						$(thisField).siblings(".characters-warning").hide();
					}
				});
			}
		}


		if (typeCheck == "VIN") {
			if (checkField("#VIN", "blank")) {
				$("#VINBlank").show();
				return;
			}
			else {
				$("#VINBlank").hide();
				if (!isValidVIN($(thisField).val())) { 
					invalidFields.push(thisField);
					$("#validation-warning").show();
				//show validation message that this isn't a valid VIN for a car made after 1981
				$("#VINMatch").show();

				//listen for when input loses focus to remove validation message
				$(thisField).off().change(function() {
					hideInvalidWarnings();
					if($("#VehicleYear").val() < "1981") {
		    			//year was changed, don't validate VIN
		    			$("#VINMatch").hide();
		    		}
		    		else {
		    			if (!isValidVIN($(thisField).val())) {
		    				$("#VINMatch").show();
		    			}
		    			else {
		    				$("#VINMatch").hide();
		    			}
		    		}
		    	});
				$("#VehicleYear").off().change(function() {
					hideInvalidWarnings();
					if($("#VehicleYear").val() < "1981") {
						$("#VINMatch").hide();
					}
					else {
						checkField("#VIN", "Serial No.", "VIN");
					}
				});
				return false;
			}
		}
	}
	if (typeCheck == "checkSeries") {
		if(!$('.validateCheckSeries:checked').length) {
			invalidFields.push(thisField);
			$("#validation-warning").show();
			$(thisField).siblings(".checkSeriesRequired").show();

			//add event listener to each of these checkboxes to hide validation message
			$(".validateCheckSeries").off().change(function() {
				hideInvalidWarnings();
				$(this).siblings(".checkSeriesRequired").hide();
				if(!$('.validateCheckSeries:checked').length) {
					invalidFields.push(this);
					$("#validation-warning").show();
					$(this).siblings(".checkSeriesRequired").show();
				}
			});
		}
	}

	if (typeCheck == "radio") {
		if(!$('input[name='+thisField+']:checked').length) {
			invalidFields.push(thisField);
			$("#validation-warning").show();
			$('input[name='+thisField+']').siblings(".radio-warning").show();
			//add event listener to hide validation message
			$('input[name='+thisField+']').change(function() {
				hideInvalidWarnings();
				$(this).siblings(".radio-warning").hide();
				//because there's no way to undo radio buttons/reset to default, we don't need to listen for it going blank.
			});
		}
	}
	return;
}
}

function invalidWarning() {
	$("#fieldsValidating").hide();
	$("#fieldsValid").hide();
	$("#fieldsInvalid").show();
	$("#validFieldsText").show();
	$("#validFieldsText")[0].innerHTML = "Invalid field(s), please review your entries above.";
}

var showSubmit = function(submitStatus, error) {
	switch (submitStatus) {			
		case "success":

		$("#submittingSpinner").hide();
		$("#submitSuccess").show();
		$("#submitFormText")[0].innerHTML = "Form submitted";
		//update smh.js to route to a different page
		break;
		case "fail": 

		$("#submittingSpinner").hide();
		$("#submitFail").show();
		$("#submitFormText")[0].innerHTML = "Sorry, there was an error submitting this form.  Please try again. <br><div class='validation'>&nbspIf that doesn’t work, please <a href='https://www.ncdot.gov/contact/' target='_blank'>Contact Us</a> for assistance.</div>";
	}
};

function isBlankOrWhitespace(str) {
	//returns true if the string does not exist, if its length is 0, or if it only contains whitespace.
	//returns 0 if the string contains text (not blank).
	return (!str || 0 === str.length | str.trim() === '');
}

function isValidVIN(str) {
	var VINre = /^\b(?:([A-HJ-NPR-Z\d]){17})\b/i;  //matches every alphabetical character upper or lower case except IOQ and any number. not special characters and only succeeds if there are exactly 17 characters.	
	if (str.match(VINre)) {
		return true;
	}
	else {
		return false;
	}
}
function textContainsNoSpecialCharacters(str) {
	var SpecialCharactersRe = /[^;'\[\]/<>?:"{}|!@#$%^&*()-\+\=]/g;
	if (str.match(SpecialCharactersRe)) {
		return true;
	}
	else {
		return false;
	}
}
function hideInvalidWarnings() {
	$("#validFieldsText").hide();
	$("#fieldsInvalid").hide();
}

fmlFunctions.showSubmit = showSubmit;
return fmlFunctions;

}());