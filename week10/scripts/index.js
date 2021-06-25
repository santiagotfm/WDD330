import { getJSON, getLocation } from './utilities.js';
import'./QuakesController.js';
import QuakesController from './QuakesController.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';


// navigator.geolocation.getCurrentPosition(result => {
//     console.log(result);
//     console.log(result.coords.longitude);
//     let longitude = result.coords.longitude;
//     let latitude = result.coords.latitude;
//     let maxradius = "&maxradiuskm=100";
//     let url = baseUrl + "&latitude=" + latitude + "&longitude=" + longitude + maxradius;
//     console.log(url)
// });

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();