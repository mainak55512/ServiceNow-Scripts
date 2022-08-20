function onLoad() {
    var gAjax = new GlideAjax('hasITIL'); // Script Include: hasITIL
    gAjax.addParam('sysparm_name', 'getRole'); // Function: getRole
    gAjax.addParam('sysparm_user', g_form.getValue('u_requested_by'));
    gAjax.getXML(callback);

    function callback(response) {
        var answer = JSON.parse(response.responseXML.documentElement.getAttribute("answer"));
        if (answer) {
            g_form.setDisplay('u_groups', false);
            g_form.setMandatory('u_groups', false);
            g_form.setDisplay('u_groups_itil', true);
            g_form.setMandatory('u_groups_itil', true);
        } else {
            g_form.setDisplay('u_groups_itil', false);
            g_form.setDisplay('u_groups', true);
            g_form.setMandatory('u_groups_itil', false);
            g_form.setMandatory('u_groups', true);
        }
    }
}




