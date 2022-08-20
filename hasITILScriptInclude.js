var hasITIL = Class.create();
hasITIL.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    getRole: function () {
        return gs.getUser().getUserByID(this.getParameter('sysparm_user')).hasRole('itil');
    },
    type: 'hasITIL'
});


