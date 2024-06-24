/** @odoo-module */
import { registry } from "@web/core/registry";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { useService } from "@web/core/utils/hooks";
const { Component, onWillStart, useRef, onMounted, useState } = owl;
class ResPartnerKanbanController extends KanbanController {
  setup() {
    super.setup();
    console.log("Hello from custom kanban addon");
    this.action = useService("action");
    this.orm = useService("orm");

    onWillStart(async () => {
      this.states = await this.orm.readGroup(
        "res.partner",
        [],
        ["state_id"],
        ["state_id"]
      );
      console.log(this.states);
    });
  }
  openSales() {
    this.action.doAction({
      type: "ir.actions.act_window",
      res_model: "sale.order",
      name: "Customer Sales",
      views: [
        [false, "list"],
        [false, "form"],
      ],
    });
  }
  selectLocation(state) {
    const id = state[0];
    const name = state[1];
    console.log("Selected Location:", name);
    console.log("Selected Location ID:", id);
    if (!state) {
      this.env.searchModel.createNewFilters([
        {
          description: name,
          domain: [["state_id", "=", false]],
          isFromAwesomeKanban: true, // this is a custom key to retrieve our filters later
        },
      ]);
    } else {
      this.env.searchModel.createNewFilters([
        {
          description: name,
          domain: [["state_id", "=", id]],
          isFromAwesomeKanban: true, // this is a custom key to retrieve our filters later
        },
      ]);
    }
  }
}

ResPartnerKanbanController.template = "owl_dashboard.res_partner_button_kanban";
export const resPartnerKanbanView = {
  ...kanbanView,
  Controller: ResPartnerKanbanController,
};
registry.category("views").add("res_partner_kanban_view", resPartnerKanbanView);
