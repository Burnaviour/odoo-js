/** @odoo-module */
import {registry} from '@web/core/registry'
import  {listView} from '@web/views/list/list_view'
import { ListController } from "@web/views/list/list_controller";
import { useService } from "@web/core/utils/hooks";
class ResPartnerListController extends ListController {
    setup(){
        super.setup();
        console.log('Hello from custom addon');
        this.action=useService("action")
    }
    openSales(){
       this.action.doAction({
        type:'ir.actions.act_window',
        res_model:'sale.order',
        name:'Customer Sales',
        views:[[false,'list'],[false,'form']],
       })
    }
}
 
ResPartnerListController.template='owl_dashboard.res_partner_button_view2'
export const resPartnerListView ={
    ...listView,
    Controller:ResPartnerListController,
    

}
registry.category('views').add('res_partner_list_view',resPartnerListView)