function onLoad() {
    var incidentNumber = g_form.getValue('number');

    if (!incidentNumber) {
        return;
    }

    var ga = new GlideAjax('IncidentSummaryAjax');

    ga.addParam('sysparm_name', 'getSummary');
    ga.addParam(
        'sysparm_incident_number',
        incidentNumber
    );

    ga.getXMLAnswer(function(answer) {
        if (!answer) {
            g_form.addInfoMessage(
                'Unable to retrieve incident information.'
            );
            return;
        }

        try {
            var result = JSON.parse(answer);

            if (!result.success) {
                g_form.addInfoMessage(result.message);
                return;
            }

            g_form.addInfoMessage(
                'Priority: ' + result.priority +
                ' | State: ' + result.state
            );
        } catch (error) {
            g_form.addErrorMessage(
                'Unable to process the incident response.'
            );
        }
    });
}