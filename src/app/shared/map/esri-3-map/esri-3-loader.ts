import * as EsriLoader from 'esri-loader';

// @dynamic
export class Esri {

    public static ArcGISDynamicMapServiceLayer: any;
    public static ArcGISTiledMapServiceLayer: any;
    public static Circle: any;
    public static Config: any;
    public static Color: any;
    public static DrawToolbar: any;
    public static EditToolBar: any;
    public static Extent: any;
    public static FeatureLayer: any;
    public static Font: any;
    public static Geometry: any;
    public static GeometryEngine: any;
    public static GeometryServiceTask: any;
    public static Graphic: any;
    public static GraphicsLayer: any;
    public static Layer: any;
    public static LengthsParameters: any;
    public static Map: any;
    public static PictureMarkerSymbol: any;
    public static Point: any;
    public static Polygon: any;
    public static Polyline: any;
    public static Projection: any;
    public static Query: any;
    public static QueryTask: any;
    public static Request: any;
    public static Scalebar: any;
    public static ScreenPoint: any;
    public static ScreenUtils: any;
    public static SimpleFillSymbol: any;
    public static SimpleLineSymbol: any;
    public static SimpleMarkerSymbol: any;
    public static SimpleRenderer: any;
    public static SpatialReference: any;
    public static TextSymbol: any;
    public static VectorTileLayer: any;
    public static WFSLayer: any;
    public static WMSLayer: any;
    public static WMSLayerInfo: any;

    public static loadModules() {
        let options = {
            dojoConfig: {
                async: true
            },
            url: 'https://js.arcgis.com/3.41/'
        };

        // Important: make sure to keep the items in the "loadModules" and the "then" part in the exact some order, so the mapping is done correctly
        return EsriLoader.loadModules([
            'esri/layers/ArcGISDynamicMapServiceLayer',
            'esri/config',
            'esri/Color',
            'esri/toolbars/draw',
            'esri/geometry/Extent',
            'esri/layers/FeatureLayer',
            'esri/symbols/Font',
            'esri/geometry/Geometry',
            'esri/geometry/geometryEngine',
            'esri/tasks/GeometryService',
            'esri/graphic',
            'esri/layers/GraphicsLayer',
            'esri/layers/layer',
            'esri/tasks/LengthsParameters',
            'esri/map',
            'esri/symbols/PictureMarkerSymbol',
            'esri/geometry/Point',
            'esri/geometry/Polygon',
            'esri/geometry/Polyline',
            'esri/geometry/projection',
            'esri/tasks/query',
            'esri/tasks/QueryTask',
            'esri/dijit/Scalebar',
            'esri/geometry/ScreenPoint',
            'esri/geometry/screenUtils',
            'esri/symbols/SimpleFillSymbol',
            'esri/symbols/SimpleLineSymbol',
            'esri/symbols/SimpleMarkerSymbol',
            'esri/renderers/SimpleRenderer',
            'esri/SpatialReference',
            'esri/symbols/TextSymbol',
            'esri/layers/VectorTileLayer',
            'esri/layers/WFSLayer',
            'esri/layers/WMSLayer',
            'esri/layers/WMSLayerInfo',
            'esri/request',
            'esri/layers/ArcGISTiledMapServiceLayer',
            'esri/toolbars/edit',
            'esri/geometry/Circle'
        ], options).then(([
            ArcGISDynamicMapServiceLayer,
            Config,
            Color,
            DrawToolbar,
            Extent,
            FeatureLayer,
            Font,
            Geometry,
            GeometryEngine,
            GeometryServiceTask,
            Graphic,
            GraphicsLayer,
            Layer,
            LengthsParameters,
            Map,
            PictureMarkerSymbol,
            Point,
            Polygon,
            Polyline,
            Projection,
            Query,
            QueryTask,
            Scalebar,
            ScreenPoint,
            ScreenUtils,
            SimpleFillSymbol,
            SimpleLineSymbol,
            SimpleMarkerSymbol,
            SimpleRenderer,
            SpatialReference,
            TextSymbol,
            VectorTileLayer,
            WFSLayer,
            WMSLayer,
            WMSLayerInfo,
            Request,
            ArcGISTiledMapServiceLayer,
            EditToolBar,
            Circle
        ]) => {
            this.ArcGISDynamicMapServiceLayer = ArcGISDynamicMapServiceLayer;
            this.Config = Config;
            this.Color = Color;
            this.DrawToolbar = DrawToolbar;
            this.Extent = Extent;
            this.FeatureLayer = FeatureLayer;
            this.Font = Font;
            this.Geometry = Geometry;
            this.GeometryEngine = GeometryEngine;
            this.GeometryServiceTask = GeometryServiceTask;
            this.Graphic = Graphic;
            this.GraphicsLayer = GraphicsLayer;
            this.Layer = Layer;
            this.LengthsParameters = LengthsParameters;
            this.Map = Map;
            this.PictureMarkerSymbol = PictureMarkerSymbol;
            this.Point = Point;
            this.Polygon = Polygon;
            this.Polyline = Polyline;
            this.Projection = Projection;
            this.Projection.load();
            this.Query = Query;
            this.QueryTask = QueryTask;
            this.Scalebar = Scalebar;
            this.ScreenPoint = ScreenPoint;
            this.ScreenUtils = ScreenUtils;
            this.SimpleFillSymbol = SimpleFillSymbol;
            this.SimpleLineSymbol = SimpleLineSymbol;
            this.SimpleMarkerSymbol = SimpleMarkerSymbol;
            this.SimpleRenderer = SimpleRenderer;
            this.SpatialReference = SpatialReference;
            this.TextSymbol = TextSymbol;
            this.VectorTileLayer = VectorTileLayer;
            this.WFSLayer = WFSLayer;
            this.WMSLayer = WMSLayer;
            this.WMSLayerInfo = WMSLayerInfo;
            this.Request = Request;
            this.ArcGISTiledMapServiceLayer = ArcGISTiledMapServiceLayer;
            this.EditToolBar = EditToolBar;
            this.Circle = Circle;
        });
    }
}