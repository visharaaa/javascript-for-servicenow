// Reference practice for a server-side ServiceNow script.
// Run only in a suitable development environment.

var gr = new GlideRecord('incident');
gr.addQuery('number', 'INC0010001');
gr.query();

if (gr.next()) {
    var callerId = gr.getValue('caller_id');
    var callerName = gr.getDisplayValue('caller_id');

    gs.info('Incident: ' + gr.getValue('number'));
    gs.info('Caller sys_id: ' + callerId);
    gs.info('Caller display value: ' + callerName);

    if (callerId) {
        var user = new GlideRecord('sys_user');

        if (user.get(callerId)) {
            gs.info('User name: ' + user.getValue('name'));
        }
    }
} else {
    gs.info('Incident not found.');
}