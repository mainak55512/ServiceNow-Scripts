(function process(request, response) {
    var u_user_id = request.pathParams.u_name;

    var gr = new GlideRecord('sys_user');
    gr.addQuery('user_name', u_user_id);
    gr.query();
    if (gr.next()) {
        var u_name = gr.sys_id;
    }

    var gr1 = new GlideRecord('incident');
    gr1.addQuery('assigned_to', u_name);
    gr1.query();
    var body = [];
    while (gr1.next()) {
        body.push({
            "Number": gr1.number.toString(),
            "State": gr1.state.getDisplayValue(),
            "Caller": gr1.caller_id.getDisplayValue(),
            "Short Description": gr1.short_description.toString(),
            "Assigned to": gr.first_name + " " + gr.last_name
        });
    }
    response.setBody(body);
})(request, response);





