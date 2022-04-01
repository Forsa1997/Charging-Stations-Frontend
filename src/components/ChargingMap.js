import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import teslaData from "../data/teslaSupercharger"
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";
// import reactElementToJSXString from 'react-element-to-jsx-string';
import { useSelector } from 'react-redux';
import mapReducer from '../reducers/mapReducer';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ChargingMap() {
    const filteredStations = useSelector(state => state.mapReducer.filteredData)
    const [myMarkers, setMyMarkers] = useState(L.markerClusterGroup());
    const [map, setMap] = useState(null)

    useEffect(() => {
        refreshLocations();
    }, [filteredStations])

    const setMapReference = (map) => {
        refreshLocations();
        setMap(map);
        myMarkers.addTo(map);
        setMyMarkers(myMarkers)
    }

    const center = {
        lat: 52.3758916,
        lng: 9.7320104,
    };
    let latlngpairs = [];
    const redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    const orangeIcon = new L.Icon({
        ...redIcon.options,
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    });

    const greenIcon = new L.Icon({
        ...redIcon.options,
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    });

    const iconColor = (power) => {
        if (power >= 150) {
           return redIcon;
        }
        else if (power >= 50) {
            return orangeIcon
        } else {
            return greenIcon;
        }
    }

    const refreshLocations = () => {

        myMarkers.clearLayers();

        filteredStations.forEach(location => {
            latlngpairs.push([location.addressInfo.latitude, location.addressInfo.longitude])

            let coordinates = L.latLng(location.addressInfo.latitude, location.addressInfo.longitude);
            let popup = "marker"
            L.marker(coordinates, { icon: iconColor(location.maxChargePower) }).bindPopup(
                popup
            ).addTo(myMarkers);
        })
    };

    if (latlngpairs.length > 0) {
        const bounds = L.latLngBounds(latlngpairs.map((c) => {
            return [c[0], c[1]];
        }));
        map.fitBounds(bounds);
    }

    return (
        <MapContainer center={center} zoom={12} whenCreated={setMapReference} scrollWheelZoom={true} preferCanvas={true} renderer={L.canvas()}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>

    )
}


