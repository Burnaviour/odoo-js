/** @odoo-module **/

import { Component,onWillStart,onMounted,useRef } from "@odoo/owl";
import {registry} from "@web/core/registry";
import {standardViewProps} from "@web/views/standard_view_props"
import {loadCSS,loadJS} from "@web/core/assets";
export class LmapRenderer extends Component {
    
    static template = "owl_dashboard.MapRnderer";

    static props={}
        
    setup() {
        this.root =useRef('map');
        console.log("LmapController setup",this);
        onWillStart(async()=>{
            await loadCSS("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
            await loadJS("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js");
            await loadCSS("https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css")
            await loadJS("https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js")
        }
        );
        onMounted(()=>{
            // this.map = L.map(this.root.el, {center: [51.505, -0.09], zoom: 13});
            this.map = L.map(this.root.el).setView([0, 0], 2);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(this.map);
            
            // L.marker([51.5, -0.09]).addTo(this.map)
            // let marker = L.marker([51.5, -0.09]).addTo(this.map);
            // marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br><button class='btn btn-primary'>Click me!</button>");
            
            L.Control.geocoder().addTo(this.map);
            this.map.on('click', (e)=>{
                var marker = new L.marker([e.latlng.lat,e.latlng.lng]).addTo(this.map);
               
            });

                
        })
    }
    
    
}