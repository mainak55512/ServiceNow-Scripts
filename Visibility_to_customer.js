answer = checkCondition();

function checkCondition() {

    var user_id =gs.getUserID();
    var user = gs.getUser();
    var gr_user  = new GlideRecord('sys_user');
    gr_user.addQuery('sys_id', user_id);
    gr_user.query();
    if (gr_user.next()) {
        var cus = gs.getProperty('system.group.all_customer_group');
        if (user.isMemberOf(cus)) {
            return true;
        }
    }
    return false;
}