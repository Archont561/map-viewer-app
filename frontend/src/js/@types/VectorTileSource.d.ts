import type VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type PopupTemplate from "@arcgis/core/PopupTemplate";

export interface VectorTileSource {
    vectorTile: VectorTileLayer;
    featureLayer: FeatureLayer;
    popupTemplate: PopupTemplate;
}
