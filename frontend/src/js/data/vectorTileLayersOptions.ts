import { PopupTemplateEntry } from "../@types";

const popupTemplates: PopupTemplateEntry[] = [
    {
        id: "1cc8ca0bfdb94d07adc1bb0c11f7fcaa",
        popupTemplatePropertiesBuilder: (sourceFeatureLayer) => ({
            title: "Gmina {gm}",
            content: (feature: __esri.Feature) => {
                if (!feature) return;
                const { teryt, wiary } = feature?.graphic?.attributes;
                const terytDomain = sourceFeatureLayer?.getFieldDomain("teryt") as __esri.CodedValueDomain;
                return `<ul class="grid grid-cols-[auto_1fr] gap-1 text-sm">
                    <li class="font-medium">Przynależność terytorialna:</li>
                    <li class="text-right">${terytDomain.getName(teryt)}</li>
                    <li class="font-medium">Wiarygodność wyników:</li>
                    <li class="text-right">${wiary.toFixed(2)}%</li>
                </ul>`
            }
        }),
    },
    {
        id: "bfb7a31543c647e991935e6d4ee071ad",
        popupTemplatePropertiesBuilder: (sourceFeatureLayer) => ({
            title: "Gmina {gm}",
            content: (feature: __esri.Feature) => {
                if (!feature) return;
                const { siedz_gmin, typ } = feature?.graphic?.attributes;
                const typDomain = sourceFeatureLayer?.getFieldDomain("typ") as __esri.CodedValueDomain;
                return `<ul class="grid grid-cols-[auto_1fr] gap-1 text-sm">
                    <li class="font-medium">Granica:</li>
                    <li class="text-right">${typDomain.getName(typ)}</li>
                    <li class="font-medium">Siedziba gminy:</li>
                    <li class="text-right">${siedz_gmin}</li>
                </ul>`;
            }
        }),
    },
    {
        id: "308adc507f614fa7aee23b04ad7f6829",
        popupTemplatePropertiesBuilder: (sourceFeatureLayer) => ({
            title: "Granica Gminy {gm}",
            content: (feature: __esri.Feature) => {
                if (!feature) return;
                const { granica } = feature?.graphic?.attributes;
                const granicaDomain = sourceFeatureLayer?.getFieldDomain("granica") as __esri.CodedValueDomain;
                return `<ul class="grid grid-cols-[auto_1fr] gap-1 text-sm">
                    <li class="font-medium">Granica:</li>
                    <li class="text-right">${granicaDomain.getName(granica)}</li>
                </ul>`;
            }
        }),
    }
];

export default popupTemplates;