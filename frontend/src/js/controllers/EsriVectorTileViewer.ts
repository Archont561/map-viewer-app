import { first, find } from 'lodash';
import EsriMap from "@arcgis/core/Map";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import Popup from "@arcgis/core/widgets/Popup";
import type {  ArcgisMap } from '@arcgis/map-components/dist/components/arcgis-map';
import type { ArcgisLayerList } from '@arcgis/map-components/dist/components/arcgis-layer-list';
import { VectorTileSource, PopupTemplatePropertiesBuilder } from "../@types";


export default class EsriVectorTileViewer {
    private tiles = [] as VectorTileSource[];
    arcgisMapContainer: ArcgisMap;
    layerList: ArcgisLayerList;

    constructor(containerId: string) {
        this.arcgisMapContainer = document.getElementById(containerId) as ArcgisMap;
        this.layerList = this.arcgisMapContainer.querySelector("arcgis-layer-list") as ArcgisLayerList;
        this.arcgisMapContainer.map = new EsriMap({
            basemap: "arcgis/light-gray",
        });
        this.setupClickHandler();
    }

    private setupClickHandler() {
        this.arcgisMapContainer.popupDisabled = true;
        this.arcgisMapContainer.popup = new Popup();
        
        this.arcgisMapContainer.addEventListener("arcgisViewClick", async (e) => {
            const hit = await this.arcgisMapContainer.hitTest((e as CustomEvent).detail);
            if (!hit.results.length) return;
            
            const tile = find(this.tiles, tile => {
                const layer = hit.results[0].layer;
                return tile.vectorTile.id === layer?.id;
            });
            if (!tile) return;
            
            const graphic = (hit.results[0] as __esri.GraphicHit).graphic;
            graphic.popupTemplate = tile.popupTemplate;
            this.arcgisMapContainer.openPopup({
                features: [graphic],
                location: (e as CustomEvent).detail.mapPoint as __esri.Point,
            })
        });
    }

    async addVectorTile(id: string, popupTemplatePropertiesBuilder: PopupTemplatePropertiesBuilder) {
        const vectorTile = new VectorTileLayer({ portalItem: { id } });
        await vectorTile.load();
        const relatedLayer = first(await vectorTile.portalItem?.fetchRelatedItems({
            direction: "forward",
            relationshipType: "Service2Data",
        }));
        if (!relatedLayer) return;

        const featureLayer = new FeatureLayer({ url: `${relatedLayer.url}/0` });
        await featureLayer.load();
        if (!featureLayer.loaded) return;
        
        if (!this.tiles.length) {
            this.arcgisMapContainer.view.goTo(vectorTile.fullExtent?.center);
        }
        this.arcgisMapContainer.map.add(vectorTile);
        this.tiles.push({
            vectorTile,
            featureLayer,
            popupTemplate: new PopupTemplate(popupTemplatePropertiesBuilder(featureLayer)),
        });
    }
}
