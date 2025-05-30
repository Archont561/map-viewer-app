export type PopupTemplatePropertiesBuilder = (
    sourceFeatureLayer?: __esri.FeatureLayer
) => __esri.PopupTemplateProperties;

export interface PopupTemplateEntry {
    id: string;
    popupTemplatePropertiesBuilder: PopupTemplatePropertiesBuilder;
}