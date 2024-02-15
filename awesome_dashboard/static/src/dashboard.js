/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashItem } from "./dashboarditem";
// import { PieChart } from "./Piechart";
const {onWillStart,useState } = owl  


class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

    setup() {
        this.action = useService("action");
        this.rpc = useService("rpc");
        this.state = useState({
            data:[]
        })
        onWillStart(async () => {
            const result = await this.rpc("/awesome_dashboard/statistics", {a: 1, b: 2});
            this.state.data = result
            console.log("result", this.state.data.average_quantity);
         });

       
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
