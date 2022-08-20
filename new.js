//Objective: Based on the value selected in the Hardware field, the Options in Model field
//should change accordingly.
function onChange(control, oldValue, newValue, isLoading) {

    //"newValue == ''" condition is not needed here because we need to run the script
    // for --None-- condition also.
    if (isLoading /*|| newValue == ''*/) {
        return;
    }

    //We have to clear the added options every time when the script runs
    //or if the --None-- is selected in the hardware field.
    g_form.removeOption('u_model', 'tuxido_pro');
    g_form.removeOption('u_model', 'system76_desktop');
    g_form.removeOption('u_model', 'tuxido_slimbook');
    g_form.removeOption('u_model', 'system76_cosmic_book');
    g_form.removeOption('u_model', 'hp_pavilion');
    g_form.removeOption('u_model', 'oneplus_5');
    g_form.removeOption('u_model', 'redmi_note_10_pro');

    //adding options for every type of hardware selection.
    if (g_form.getValue('u_hardware') == 'desktop') {

        g_form.addOption('u_model', 'tuxido_pro', 'Tuxido pro', 1);
        g_form.addOption('u_model', 'system76_desktop', 'System76 Desktop', 2);

    } else if (g_form.getValue('u_hardware') == 'laptop') {

        g_form.addOption('u_model', 'system76_cosmic_book', 'System76 Cosmic book', 1);
        g_form.addOption('u_model', 'hp_pavilion', 'HP Pavilion', 2);
        g_form.addOption('u_model', 'tuxido_slimbook', 'Tuxido Slimbook', 3);

    } else if (g_form.getValue('u_hardware') == 'smart_phone') {

        g_form.addOption('u_model', 'oneplus_5', 'Oneplus 5', 1);
        g_form.addOption('u_model', 'redmi_note_10_pro', 'Redmi Note 10 Pro', 2);

    }

}