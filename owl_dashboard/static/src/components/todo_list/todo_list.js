/**@odoo-module */
import { registry } from "@web/core/registry";
const { Component,useState } = owl;
import { CarDash } from "../car";
export class TodoList extends Component{
setup(){
    this.state =useState({
        taskList:[
            {id:1, name:"todo 1",color:"#FF0000" ,done:false},
            {id:2, name:"todo 2",color:"#FFFFFF", done:true},
        ]
    })
}

}
TodoList.template = "owl_dashboard.todo_list_template"
TodoList.components = { CarDash,  };
registry
  .category("actions")
  .add("owl_dashboard.owl_action_todo_list", TodoList);
// registry.category("main_components").add("owl_action_todo_list1", {
//     Component: TodoList,
//   });