/** @odoo-module **/

import { Component } from "@odoo/owl";
import {registry} from "@web/core/registry";
import {standardViewProps} from "@web/views/standard_view_props"
import { LmapController } from "./lmap_controller";

const leafLeftMapView={
    type:"lmap",
    display_name:"Leaflet Map",
    icon:'fa fa-map-marker',
    multiRecord:true,
    Controller:LmapController
}

// LmapController.components = {};

// LmapController.defaultProps = {};
// LmapController.props = {};
registry.category("views").add("lmap", leafLeftMapView);