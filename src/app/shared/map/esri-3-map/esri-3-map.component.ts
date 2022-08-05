import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, bindCallback, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { DynamicLayerHelper } from './dynamic-layer.helper';
import { Esri } from './esri-3-loader';
import { Utilities } from './utilities';

@Component({
	selector: 'esrimap',
	templateUrl: './esri-3-map.component.html',
	styleUrls: ['./esri-3-map.component.scss']
})
export class Esri3MapComponent implements OnInit {

	private _infraLayers: Array<any> = [];
	private _structureLayer: any;
	private _routeLayer: any;
	private _dynamicLayerHelper: DynamicLayerHelper;
	private _map: any;

	public initialized$ = new BehaviorSubject<boolean>(false);
	constructor() { }

	_initMap(lods: any, basemap: any) {
		this._map = new Esri.Map("map-container", {
			extent: new Esri.Extent(
				234961.4523305978,
				5066981.101811297,
				244315.43366698362,
				5070802.953225551, new Esri.SpatialReference(3857)),
			lods: lods
		});

		this._structureLayer = this._addFeatureLayer(
			"https://demodt.merkator.com/arcgis/rest/services/Marlin/INFRA/FeatureServer/0");

		this._routeLayer = this._addFeatureLayer(
			"https://demodt.merkator.com/arcgis/rest/services/Marlin/INFRA/FeatureServer/1");

		this._infraLayers.push(this._structureLayer, this._routeLayer);
		this._map.addLayers(this._infraLayers);

		this._dynamicLayerHelper = new DynamicLayerHelper(this._map);
		this._map.on('load', () => {
			this._map.addLayer(basemap);
		});

		this._onMapClick();

		this._map.on('load', () => this.initialized$.next(true));
	}

	ngOnInit(): void {

		Esri.loadModules().then(() => {
			// Add the basemap and store the lods
			let basemap = new Esri.ArcGISTiledMapServiceLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer')
			basemap.on('load', (e: any) => {
				this._initMap(e.layer.tileInfo.lods, basemap);
			});
		});
	}

	public zoomTo(entityKey: { classId: number, id: number }) {

		// temporary to test ozoming before getgraphicalparents call is done
		entityKey.classId = 1001;
		entityKey.id = 298624693;

		this._queryLayers(null, `ID=${entityKey.id}`)
			.subscribe(features => {
				if (features.length != 0) {
					let feature = features[0];
					let extent = this._getExtentFromGeometry(feature.geometry);
					this._map.setExtent(extent, true);
				}
			});
	}

	public showOnDynamicLayer() {
		this._dynamicLayerHelper.showOnDynamicLayer(null);
	}

	private _getExtentFromGeometry(geometry: any): any {
		let esriExtent;
		let tolerance = 20;
		if (geometry instanceof Esri.Point) {
			esriExtent = new Esri.Extent(
				geometry.x - tolerance,
				geometry.y - tolerance,
				geometry.x + tolerance,
				geometry.y + tolerance,
				new Esri.SpatialReference({
					wkid: this._map.spatialReference
				}));
		}
		else
			esriExtent = geometry.getExtent();
		return esriExtent;
	}


	private _addFeatureLayer(url: string) {
		let layer = new Esri.FeatureLayer(
			url
		);
		var symbol = new Esri.SimpleMarkerSymbol(
			Esri.SimpleMarkerSymbol.STYLE_CIRCLE,
			12,
			new Esri.SimpleLineSymbol(
				Esri.SimpleLineSymbol.STYLE_NULL,
				new Esri.Color([247, 34, 101, 0.9]),
				1
			),
			new Esri.Color([207, 34, 171, 0.5])
		);
		layer.setSelectionSymbol(symbol);
		layer.setMinScale(10000000);

		return layer;
	}

	private _queryLayers(geometry?: any, where?: string) {
		let queries = [];
		for (let layer of this._map.getLayersVisibleAtScale()) {
			let qt = new Esri.QueryTask(layer.url);
			let q = new Esri.Query();
			q.outFields = ['ID', 'FEATURE_CODE'];
			if (geometry)
				q.geometry = geometry;
			if (where)
				q.where = where;
			q.returnGeometry = true;

			let obs = bindCallback(qt.execute);
			var qqq = obs.call(qt, q);
			queries.push(qqq);
		}

		return forkJoin(queries)
			.pipe(
				map((results: any) => {
					let features = [];
					for (let result of results)
						if (result.features)
							features.push(...result.features);
					for (let feature of features)
						feature.geometry.spatialReference = new Esri.SpatialReference(this._map.spatialReference);
					return features;
				})
			)
	}

	_onMapClick() {
		// When the map is clicked create a buffer around the click point of the specified distance
		this._map.on("click", (evt: any) => {
			let extent = this.getExtentFromScreenPoint(evt.screenPoint);
			this._queryLayers(extent)
				.subscribe(features => {
					console.log('found the following features at clickpoint:');
					console.log(features);
				})
		});
	}

	private _getMapFeatures(features: Array<any>): any {
		return this._queryLayers(undefined, `ID in (${features.map(x => x.id).join(',')})`);
	}

	public getExtentFromScreenPoint(screenPoint: any, pixelTolerance: number = 5) {

		// Create a selection extent by getting the topleft and bottomright pixel so we have the pixel extent
		let topLeftPixel = [screenPoint.x - pixelTolerance, screenPoint.y - pixelTolerance];
		let bottomRightPixel = [screenPoint.x + pixelTolerance, screenPoint.y + pixelTolerance];

		// Translate the pixel extent to a coordinate extent
		let topleft = Utilities.toCoordinate(this._map, topLeftPixel);
		let bottomright = Utilities.toCoordinate(this._map, bottomRightPixel);

		// Now get the xmin, ymin, xmax, ymax values of these coordinates
		let xmin: number, ymin: number, xmax: number, ymax: number;

		if (topleft.x <= bottomright.x) {
			xmin = topleft.x;
			xmax = bottomright.x;
		}
		else {
			xmin = bottomright.x;
			xmax = topleft.x;
		}

		if (topleft.y <= bottomright.y) {
			ymin = topleft.y;
			ymax = bottomright.y;
		}
		else {
			ymin = bottomright.y;
			ymax = topleft.y;
		}

		return new Esri.Extent(xmin, ymin, xmax, ymax, this._map.spatialReference);
	}
}