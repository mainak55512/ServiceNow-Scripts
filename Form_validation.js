function onSubmit() {

    // Regex for name validation
    var validName = /^[a-zA-Z ]{2,30}$/;

    // Regex for Email validation
    var validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;

    // Regex for Phone Number validation
    var validPhoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!validName.test(g_form.getValue("u_name"))) {
        g_form.showFieldMsg('u_name', 'Invalid format. Correct format should be like: <firstname lastname>', 'error');
        return false;
    }
    if (!validEmail.test(g_form.getValue("u_email"))) {
        g_form.showFieldMsg('u_email', 'Invalid format. Correct format should be like: <example@example.com>', 'error');
        return false;
    }
    if (!validPhoneNumber.test(g_form.getValue("u_phone_number"))) {
        g_form.showFieldMsg('u_phone_number', 'Invalid format. Correct format should be like: <1234567890> or <123 456 7890> or <123-456-7890> or <123.456.7890>', 'error');
        return false;
    }
    return true;
}






