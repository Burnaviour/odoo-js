/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashItem } from "./dashboarditem";


class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

    setup() {
        this.action = useService("action");

       
     }
     get service(){
        const value=this.env.services.shared_state
        return value
     }
     async ViewCustomer(e) {
        // let action_id = await this.orm.searchRead(
        //     "ir.model.data",
        //     [["name", "=", "view_quotation_tree_with_onboarding"]],
        //     ["res_id"]
        //   );
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: 'Customers',
            res_model: 'res.partner',
            views: [[false, 'kanban'], [false, 'form']],
            search_view_id: [false],
        });
    }

    async ViewLead(e) {
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: 'Leads',
            res_model: 'crm.lead',
            views: [[false, 'kanban'], [false, 'form']],
            search_view_id: [false],
        });
    }
}



AwesomeDashboard.components = { Layout,DashItem};
registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
