// eslint-disable-next-line
import { TileLayer,  Popup } from 'react-leaflet'
// eslint-disable-next-line
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ChargingMap() {

    const data = useSelector (state => state.mapReducer.filteredData);

    useEffect(() => {
    
        var map = L.map('map').setView([52.3758916, 9.7320104], 8)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        var markers = L.markerClusterGroup();
        data.map(station => {
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