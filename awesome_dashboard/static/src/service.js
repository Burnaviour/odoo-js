/** @odoo-module **/
import { registry } from "@web/core/registry";

export const sharedStateService = {
start(env) {
   let state = {};

   return {
      string: "shared_state",
      boolean:true,
      float: 0.0,
      array:[1,2,3,5],
      object: {'a':1, 'b':2},
      "function":()=>{
         console.log("Hello from shared state");
         return "service test"
      }
      
      
   };
},
};

registry.category("services").add("shared_state", sharedStateService);