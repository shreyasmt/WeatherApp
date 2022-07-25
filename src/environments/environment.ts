// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',
  XRapidApiHostHeaderName: 'X-RapidAPI-Host',
  XRapidApiHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',
  XRapidApiKeyHeaderName: 'X-RapidAPI-Key',
  XRapidApiKeyHeaderValue: '28567988fcmsh8f94b66687537e4p1e6f8ejsn52093e2b5d0f'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
