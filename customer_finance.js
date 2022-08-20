answer = checkCondition();

function checkCondition() {

    var user_id = gs.getUserID();
    var user = gs.getUser();
    var dep = gs.getProperty('system.department.finance');
    var gr_user = new GlideRecord('sys_user');
    gr_user.addQuery('sys_id', user_id);
    gr_user.query();
    if (gr_user.next()) {
        var cus1 = gs.getProperty('system.group.all_customer_group');
        var cus2 = gs.getProperty('system.group.all_customer_generation_group');
        var cus3 = gs.getProperty('system.group.all_customer_executive_group');
        if ((user.isMemberOf(cus1) || user.isMemberOf(cus2) || user.isMemberOf(cus3) || user.u_primary_domain == 'Customer') && (user.getDepartmentID() == dep)) {
            return true;
        }
    }
    return false;
}