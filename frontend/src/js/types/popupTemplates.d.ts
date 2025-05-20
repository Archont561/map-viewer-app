export type PopupTemplatePropertiesBuilder = (
    sourceFeatureLayer?: __esri.FeatureLayer
) => __esri.PopupTemplateProperties;

interface PopupTemplateEntry {
    id: string;
    popupTemplatePropertiesBuilder: PopupTemplatePropertiesBuilder;
}