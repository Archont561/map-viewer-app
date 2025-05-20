export declare type PopupTemplatePropertiesBuilder = (
    sourceFeatureLayer?: __esri.FeatureLayer
) => __esri.PopupTemplateProperties;

export declare interface PopupTemplateEntry {
    id: string;
    popupTemplatePropertiesBuilder: PopupTemplatePropertiesBuilder;
}