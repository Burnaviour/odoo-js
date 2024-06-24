/**@odoo-module */
const { Component, onWillStart, useRef, onMounted, useState } = owl;
import { useService } from "@web/core/utils/hooks";

export class CarDash extends Component{

    setup() {
        this.state = useState({
          quotation: {
            value: 10,
            percentage: 10,
          },
          period: 90,
        });
        this.orm = useService("orm");
        this.action = useService("action");
        // onWillStart(async () => {
        //   this.getDates();
        //   await this.getQuotation();
        //   await this.getOrders();
        //   await this.getPartnerOrders();
        //   await this.getMonthlySales();
        //   await this.getTopProducts();
        //   await this.getTopSalesPeople();
        // });
    
      }
    test(ev){
        // console.log('test',ev);
        let res= ev.currentTarget.getAttribute('data-id');
        this.action.doAction({
            type: 'ir.actions.act_window',
            res_model: 'car.damage.return.wizard',
            views: [[false, 'form']],
            target: 'new',
            context:`{'default_car':'${res}'}`,
        });
    }
}
CarDash.template = "owl_dashboard.CarDash"
