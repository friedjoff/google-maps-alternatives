# Google Maps alternatives

Talk and code examples about alternatives to Google Maps.

* [Slides](https://github.com/friedjoff/google-maps-alternatives/raw/master/slides.pdf)

## Requirements

* [GDAL](https://www.gdal.org/)
* [tippecanoe](https://github.com/mapbox/tippecanoe)
* [Yarn](https://yarnpkg.com/lang/en/)

## Getting started

* `yarn run georeferencing` to assign coordinates to citymap.jpg image.
* `yarn run reprojecting` to transform the image to Web Mercator projection.
* `yarn run tiling` to create raster tiles based on the georeferenced image.
* `yarn run generate-vector-tiles` to create vector tiles based on the GeoJSON file.
* Run `yarn install` and `yarn run serve-vector-tiles` to start a local vector tile server.
* Have a look at the code examples 1 to 6.

## Overpass API queries

Query used to generate trees-small.json file:

```
[out:json][timeout:25];
(
  node["natural"="tree"](47.9795383955,7.8295813256,48.0119900765,7.8759939415);
);
out body;
>;
out skel qt;
```

Query used to generate trees-big.json file:

```
[out:json][timeout:250];
(
  node["natural"="tree"](47.52681,7.503992,48.72392,9.246965);
);
out body;
>;
out skel qt;
```
