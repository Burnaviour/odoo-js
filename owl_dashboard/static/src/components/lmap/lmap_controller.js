/** @odoo-module **/

import { Component } from "@odoo/owl";
import {registry} from "@web/core/registry";
import {standardViewProps} from "@web/views/standard_view_props"
import { LmapRenderer } from "./lmap_renderer";
import { Layout } from "@web/search/layout";
export class LmapController extends Component {
    static template = "owl_dashboard.MapView";
    static props={
        ...standardViewProps
    }
    static components = {LmapRenderer,Layout}; 
    setup() {
        console.log("LmapController setup",this);
    }
}