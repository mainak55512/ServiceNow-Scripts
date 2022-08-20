function onLoad() {

	var reg = /aternity\.sdf/g; // Using regex to determine wheather correlation display contains 'aternity.sdf'
	var data = g_form.getValue('u_correlation_display');
	if (reg.test(data)) {
		g_form.setSectionDisplay('aternity_details', true);
	}
	else {
		g_form.setSectionDisplay('aternity_details', false);
	}

}



