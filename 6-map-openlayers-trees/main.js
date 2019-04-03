import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import MVTFormat from "ol/format/MVT";
import TileLayer from "ol/layer/Tile";
import VectorTileLayer from "ol/layer/VectorTile";
import VectorTileSource from "ol/source/VectorTile";
import XYZ from "ol/source/XYZ";
import { Circle, Fill, Style } from "ol/style";

var backgroundLayer = new TileLayer({
  source: new XYZ({
    url:
      "https://cartodb-basemaps-1.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
  })
});

const treeColors = {
  broadleaved: "#990",
  needleleaved: "#099"
};

var treeLayer = new VectorTileLayer({
  source: new VectorTileSource({
    format: new MVTFormat(),
    maxZoom: 12,
    url: "http://localhost:3000/trees.mbtiles/{z}/{x}/{y}.pbf"
  }),
  style: feature =>
    new Style({
      image: new Circle({
        radius: 2,
        fill: new Fill({
          color: treeColors[feature.properties_.leaf_type] || "#090"
        })
      })
    })
});

new Map({
  layers: [backgroundLayer, treeLayer],
  renderer: "webgl",
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
