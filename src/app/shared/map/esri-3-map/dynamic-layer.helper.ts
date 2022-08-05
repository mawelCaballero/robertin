import { Esri } from "./esri-3-loader";
import { Utilities } from "./utilities";

export class DynamicLayerHelper {
    private _dynamicLayer: any;
    constructor(private _map: any) {
        this._dynamicLayer = new Esri.GraphicsLayer('dynamicLayer');
        this._dynamicLayer.on('mouse-over', e => this._onMouseOver(e));
        this._dynamicLayer.on('mouse-out', e => this._onMouseOut(e));
        this._map.addLayer(this._dynamicLayer);
    }

    private _onMouseOver(evt) {
        // evt.graphic.symbol.setWidth(20);
    }

    private _onMouseOut(evt) {
        // evt.graphic.symbol.setWidth(6);
    }

    public showOnDynamicLayer(features: Array<{ feature_code: number, id: number }>) {
        // this._getMapFeatures(features)
        // 	.subscribe(mapfeatures => {
        let points = [
            new Esri.Point(236339.12829999998, 5071645.035599999, this._map.spatialReference),
            new Esri.Point(236356.18239999935, 5069569.711599998, this._map.spatialReference),
            new Esri.Point(244670.83089999855, 5070786.060800001, this._map.spatialReference)];

        for (let point of points) {
            let label = new Esri.Graphic(
                point,
                new Esri.TextSymbol(
                    'FEATURE',
                    new Esri.Font("20px", Esri.Font.STYLE_NORMAL, Esri.Font.VARIANT_NORMAL, Esri.Font.WEIGHT_BOLDER, 'Segoe UI'),
                    new Esri.Color("#0e9595")));
            this._dynamicLayer.add(label);
        }


        this._draw3DLineBetweenPoints(points);
    }

    private _draw3DLineBetweenPoints(points: Array<any>) {
        let offsetPolyline = new Esri.Polyline(this._map.spatialReference);
        let polylines = [];

        let prevPoint = undefined;
        for (let point of points) {
            // Populate the offsetpolyline
            let offset = this._offsetPoint(point);
            offsetPolyline.addPath([point, offset]);

            // Populate the 3d line
            if (prevPoint) {
                polylines.push(this.make3dLine(prevPoint, offset));
            }

            prevPoint = offset;
        }

        let lineColor = new Esri.Color("#0e9595")

        this._dynamicLayer.add(new Esri.Graphic(
            offsetPolyline,
            new Esri.SimpleLineSymbol(
                Esri.SimpleLineSymbol.STYLE_SHORTDOT,
                lineColor,
                4
            )));

        for (let polyline of polylines) {
            this._dynamicLayer.add(new Esri.Graphic(
                //Esri.GeometryEngine.convexHull(polyline),
                polyline,
                new Esri.SimpleLineSymbol(
                    Esri.SimpleLineSymbol.STYLE_SOLID,
                    lineColor,
                    6
                )));
        }
    }

    private make3dLine(startPoint, endPoint, iterations = 10) {
        let points = this.rotateAndDensify(startPoint, endPoint, 3);
        let polyline = new Esri.Polyline(this._map.spatialReference);
        polyline.addPath(points);
        return polyline;
    }

    private rotateAndDensify(pointA, pointB, remainingIterations: number) {
        let diffX = pointA.x - pointB.x;
        let diffY = pointA.y - pointB.y;

        let halfway = new Esri.Point(pointA.x - (diffX / 2), pointA.y - (diffY / 2));

        // Split up the straight line into two equal sections
        let line1 = new Esri.Polyline(this._map.spatialReference),
            line2 = new Esri.Polyline(this._map.spatialReference);

        line1.addPath([pointA, halfway]);
        line2.addPath([halfway, pointB])

        let angle = remainingIterations;
        let rotatedLine1 = Esri.GeometryEngine.rotate(line1, angle, pointA),
            rotatedLine2 = Esri.GeometryEngine.rotate(line2, -angle, pointB);

        let rotatedLine1StartPoint = new Esri.Point(rotatedLine1.paths[0][0], this._map.spatialReference),
            rotatedLine1Endpoint = new Esri.Point(rotatedLine1.paths[0][rotatedLine1.paths[0].length - 1], this._map.spatialReference),
            rotatedLine2StartPoint = new Esri.Point(rotatedLine2.paths[0][0], this._map.spatialReference),
            rotatedLine2Endpoint = new Esri.Point(rotatedLine2.paths[0][rotatedLine1.paths[0].length - 1], this._map.spatialReference);

        let result = [];
        remainingIterations--;

        result.push(rotatedLine1StartPoint);
        if (remainingIterations > 0)
            result.push(...this.rotateAndDensify(rotatedLine1StartPoint, rotatedLine1Endpoint, remainingIterations));
        result.push(rotatedLine1Endpoint);

        result.push(rotatedLine2StartPoint);
        if (remainingIterations > 0)
            result.push(...this.rotateAndDensify(rotatedLine2StartPoint, rotatedLine2Endpoint, remainingIterations));
        result.push(rotatedLine2Endpoint);

        return result;
    }

    private _offsetPoint(point, offsetParams: { x: number, y: number } = { x: 20, y: 70 }) {
        let pixel = Utilities.toPixel(this._map, point);
        let offsetPixel = [pixel[0] + offsetParams.x, pixel[1] - offsetParams.y];
        let offsetPoint = Utilities.toCoordinate(this._map, offsetPixel);

        return offsetPoint;
    }
}