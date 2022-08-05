import { Esri } from "./esri-3-loader";

export class Utilities {
    public static toPixel(map: any, point: any): any {
        let esriPoint = Esri.ScreenUtils.toScreenPoint(map.extent, map.width, map.height, point);
        return [esriPoint.x, esriPoint.y];
    }

    public static toCoordinate(map: any, pixel: any, spatialReference?: number): any {
        return Esri.ScreenUtils.toMapPoint(map.extent, map.width, map.height, new Esri.ScreenPoint(pixel[0], pixel[1]));
    }
}