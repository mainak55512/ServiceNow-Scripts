function onChange(control, oldValue, newValue, isLoading) {
    if (/*isLoading || */newValue == '') {
        return;
    }

    //Type appropriate comment here, and begin script below
    g_form.getReference('u_requested_for', callBack);
    function callBack(caller) {
        if (caller.mobile_phone) {
            g_form.setValue('u_phone_number', caller.mobile_phone);
            g_form.setReadOnly('u_phone_number', true);
        }
        else {
            g_form.clearValue('u_phone_number');
            g_form.setReadOnly('u_phone_number', false);
        }
        if (caller.email) {
            g_form.setValue('u_email', caller.email);
            g_form.setReadOnly('u_email', true);
        }
        else {
            g_form.clearValue('u_email');
            g_form.setReadOnly('u_email', false);
        }
        if (caller.department) {
            g_form.setValue('u_department', caller.department);
            g_form.setReadOnly('u_department', true);
        }
        else {
            g_form.clearValue('u_department');
            g_form.setReadOnly('u_department', false);
        }
    }
}