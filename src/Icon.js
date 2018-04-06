import L from 'leaflet';

const trafficIcon = new L.Icon({
    iconUrl: 'http://pngimages.net/sites/default/files/red-traffic-lightign-png-image-73849.png',
    iconSize: [30, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

const weatherIcon = new L.Icon({
  iconUrl: 'https://image.flaticon.com/icons/png/128/143/143777.png',
  iconSize: [30, 40],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

const roadIcon = new L.Icon({
  iconUrl: 'https://cdn3.iconfinder.com/data/icons/phuzion/PNG/Apps/VLC.png',
  iconSize: [30, 40],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

const accidentIcon = new L.Icon({
  iconUrl: 'https://cdn3.iconfinder.com/data/icons/basicolor-signs-warnings/24/182_warning_notice_error-512.png',
  iconSize: [30, 40],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

export { trafficIcon, weatherIcon, roadIcon, accidentIcon };