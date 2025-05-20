import "../css/main.css";
import "./webComponents.import";
import esriConfig from "@arcgis/core/config";
import EsriVectorTileViewer from "./controllers/EsriVectorTileViewer";
import vectorTilesOptions from "./data/vectorTileLayersOptions";

window.addEventListener("DOMContentLoaded", () => {
    // @ts-ignore
    esriConfig.apiKey = import.meta.env.VITE_API_KEY;
    const esriVTViewer = new EsriVectorTileViewer("arcgis-map-1");
    
    vectorTilesOptions.forEach(option => {
        esriVTViewer.addVectorTile(option.id, option.popupTemplatePropertiesBuilder);
    });
});