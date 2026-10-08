// servicenow/01-incident-utils.js

var IncidentUtils = Class.create();

IncidentUtils.prototype = {
    initialize: function() {},

    getIncidentByNumber: function(number) {
        var gr = new GlideRecord('incident');

        if (gr.get('number', number)) {
            return gr;
        }

        return null;
    },

    isCritical: function(incident) {
        return incident.getValue('priority') == '1';
    },

    type: 'IncidentUtils'
};