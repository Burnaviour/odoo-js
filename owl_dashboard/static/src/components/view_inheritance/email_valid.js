/** @odoo-module */
import { registry } from "@web/core/registry";
import {EmailField} from "@web/views/fields/email/email_field";
import { _t } from "@web/core/l10n/translation";
class ValidEmailField extends EmailField {
    
    setup(){
        super.setup();
      
    }
}

ValidEmailField.supportedTypes = ['char'];
ValidEmailField.template = 'owl_dashboard.email_valid';

export const emailField = {
    component: ValidEmailField,
    displayName: _t("Email"),
    supportedTypes: ["char"],
    extractProps: ({ attrs }) => ({
        placeholder: attrs.placeholder,
    }),
};
class FormEmailField extends EmailField {
    static template = "web.FormEmailField";
}
export const formEmailField = {
    ...emailField,
    component: FormEmailField,
};
// registry.category('fields').add('valid_email', ValidEmailField);
registry.category("fields").add("valid_email", ValidEmailField);