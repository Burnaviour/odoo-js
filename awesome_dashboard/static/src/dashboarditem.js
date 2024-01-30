/**@odoo-module */

const {Component,useRef, onMounted } = owl  
export class DashItem extends Component{
setup(){
    this.myRef = useRef('some_name');
    onMounted(() => {
      console.log("mounted") 

      console.log(this.myRef )
    })
}

}
DashItem.template = "awesome_dashboard.DashboardItem"
