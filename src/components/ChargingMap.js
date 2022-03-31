// eslint-disable-next-line
import { TileLayer,  Popup } from 'react-leaflet'
// eslint-disable-next-line
import MarkerClusterGroup from 'react-leaflet-markercluster';
import stationData from "../data/stationData.json"
import L from 'leaflet';
import { useEffect } from 'react';


export default function ChargingMap() {

    useEffect(() => {
        var map = L.map('map').setView([52.3758916, 9.7320104], 8)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        var markers = L.markerClusterGroup();
        
        stationData.map(station => {
            const marker = L.marker([
                station.addressInfo.latitude,
                station.addressInfo.longitude
            ]).bindPopup('marker ' + station.id)
            markers.addLayer(marker)
            return null;
        })
        map.addLayer(markers);
    })

    return (
        <div id="map" />
    )
}