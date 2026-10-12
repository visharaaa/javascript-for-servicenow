(function executeRule(current, previous) {

    var isCritical = current.getValue('priority') == '1';
    var description = current.getValue('description');

    if (isCritical && !description) {
        gs.addErrorMessage(
            'A description is required for critical incidents.'
        );

        current.setAbortAction(true);
    }

})(current, previous);