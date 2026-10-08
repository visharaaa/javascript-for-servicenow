// servicenow/03-priority-client-script.js

function onChange(control, oldValue, newValue, isLoading) {

    if (isLoading) {
        return;
    }

    if (newValue == '1') {
        g_form.setMandatory('description', true);

        g_form.showFieldMsg(
            'priority',
            'Critical incidents require a description.',
            'warning'
        );
    } else {
        g_form.setMandatory('description', false);
    }
}