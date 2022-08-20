function onLoad() {
    if (g_form.getValue('u_groups_itil')) {
        g_form.setDisplay('u_groups_itil', true);
        g_form.setMandatory('u_groups_itil', true);
        g_form.setDisplay('u_groups', false);
        g_form.setMandatory('u_groups', false);
        g_form.setReadOnly('u_groups_itil', true);
    } else if (g_form.getValue('u_groups')) {
        g_form.setDisplay('u_groups', true);
        g_form.setMandatory('u_groups', true);
        g_form.setDisplay('u_groups_itil', false);
        g_form.setMandatory('u_groups_itil', false);
        g_form.setReadOnly('u_groups', true);
    }
    var fld = g_form.getEditableFields();
    for (var i = 0; i < fld.length; i++) {
        g_form.setReadOnly(fld[i], true);
    }
}