import { first, find } from 'lodash';

// import Config from "@arcgis/core/config";
import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const apiKey = "";
const vtlItemId = "1cc8ca0bfdb94d07adc1bb0c11f7fcaa"
const vtlLayer = new VectorTileLayer({ portalItem: { id: vtlItemId } });
let fl: FeatureLayer | null = null;

const map = new EsriMap({
    // basemap: "arcgis/light-gray",
    layers: [vtlLayer]

});

const view = new MapView({
    container: "arcgis-map-1",
    zoom: 5,
    map: map
});

vtlLayer.load().then(async ()=>{
    view.goTo(vtlLayer.fullExtent?.center);

    const relatedLayer = first(await vtlLayer.portalItem?.fetchRelatedItems({ 
        direction: "forward", 
        relationshipType: "Service2Data"
    }));
    
    if (!relatedLayer) return;

    const layerUrl = `${relatedLayer.url}/0`;
    fl = new FeatureLayer({ url: layerUrl });
    
    await fl.load();
})

view.on("click", async (e) => {
    const hit = await view.hitTest(e, { include: vtlLayer });
    if (!hit.results.length) return;

    // @ts-ignore
    const graphic = hit.results[0].graphic
    const attributes = Object.entries(graphic.attributes).filter(([key]) => !key.startsWith('_'));
    const content = attributes.map(([k, v]) => {
        const domain = fl?.getFieldDomain(k);
        if (!domain) return `<p>${k} - ${v}</p>`
        const codedValues = domain.toJSON().codedValues;
        const domainValue = find(codedValues, { code: v }).name
        return `<p>${k} - ${domainValue}</p>`

    }).join("");

    view.popupEnabled = false;
    view.openPopup({
        title: "dafsdfasd",
        content: content,
        location: e.mapPoint
    })
    view.popupEnabled = false;
    
})