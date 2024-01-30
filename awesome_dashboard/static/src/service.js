/** @odoo-module **/
import { registry } from "@web/core/registry";

export const sharedStateService = {
start(env) {
   let state = {};

   return {
      getValue(key) {
      return state[key];
      },
      setValue(key, value) {
      state[key] = value;
      },
   };
},
};

registry.category("services").add("shared_state", sharedStateService);