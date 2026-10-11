var IncidentSummaryAjax = Class.create();

IncidentSummaryAjax.prototype = Object.extendsObject(
    AbstractAjaxProcessor,
    {
        getSummary: function() {
            var number = this.getParameter(
                'sysparm_incident_number'
            );

            if (!number) {
                return JSON.stringify({
                    success: false,
                    message: 'Incident number is required'
                });
            }

            var gr = new GlideRecord('incident');

            if (!gr.get('number', number)) {
                return JSON.stringify({
                    success: false,
                    message: 'Incident not found'
                });
            }

            return JSON.stringify({
                success: true,
                number: gr.getValue('number'),
                priority: gr.getValue('priority'),
                state: gr.getValue('state')
            });
        },

        type: 'IncidentSummaryAjax'
    }
);