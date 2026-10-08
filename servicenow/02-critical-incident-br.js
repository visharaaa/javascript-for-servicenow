// servicenow/02-critical-incident-br.js

(function executeRule(current, previous) {

    var utils = new IncidentUtils();

    if (utils.isCritical(current)) {
        gs.info(
            'Critical incident detected: ' +
            current.getValue('number')
        );
    }

})(current, previous);