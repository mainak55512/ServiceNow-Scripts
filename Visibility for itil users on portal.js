function onLoad() {
    //Type appropriate comment here, and begin script below
    if (g_user.hasRole('itil')) {
        g_form.setDisplay('u_groups', false);
        g_form.setMandatory('u_groups', false);
        g_form.setDisplay('u_groups_itil', true);
        g_form.setMandatory('u_groups_itil', true);
    } else {
        g_form.setDisplay('u_groups_itil', false);
        g_form.setMandatory('u_groups_itil', false);
        g_form.setDisplay('u_groups', true);
        g_form.setMandatory('u_groups', true);
    }
}