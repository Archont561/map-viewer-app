import type VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import type FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import type PopupTemplate from "@arcgis/core/PopupTemplate";

declare global {
  interface VectorTileSource {
    vectorTile: VectorTileLayer;
    featureLayer: FeatureLayer;
    popupTemplate: PopupTemplate;
  }

  type PopupTemplatePropertiesBuilder = (
    sourceFeatureLayer?: __esri.FeatureLayer
  ) => __esri.PopupTemplateProperties;

  interface PopupTemplateEntry {
    id: string;
    popupTemplatePropertiesBuilder: PopupTemplatePropertiesBuilder;
  }
}

export {};