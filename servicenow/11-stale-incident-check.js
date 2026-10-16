// Reference script for a ServiceNow Scheduled Script Execution.
// Test in a development instance before scheduling recurring runs.

var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.addQuery('sys_updated_on', '<=', gs.daysAgoStart(7));
gr.query();

var count = 0;

while (gr.next()) {
    count++;

    gs.info(
        '[StaleIncidentCheck] Review incident: ' +
        gr.getValue('number')
    );
}

gs.info(
    '[StaleIncidentCheck] Total incidents found: ' +
    count
);