// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  redirectUri: "http://localhost:4200",
  clientId: "c738ad0a-c0b1-4be3-88a3-9af6da2fd04f",
  authority:
    "https://login.microsoftonline.com/a17ec843-af69-4e17-a6fc-3e803a903e14",
  wsendpoint: "https://int-agw-marlindt.azurewebsites.net",
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
