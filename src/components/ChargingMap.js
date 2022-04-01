import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import teslaData from "../data/teslaSupercharger"
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";
import reactElementToJSXString from 'react-element-to-jsx-string';
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
        map.on('zoomend', function () {
            let radius = 8;
            const zoom = map.getZoom();
            console.log(zoom);

            if (zoom < 18) {
                radius = 7;
            } else if (zoom < 17) {
                radius = 6;
            } else if (zoom < 16) {
                radius = 5;
            } else if (zoom < 15) {
                radius = 4;
            } else if (zoom < 14) {
                radius = 1;
            }
            myMarkers.eachLayer(function (marker) {
                marker.setRadius(radius);
            });
        });
    }

    const center = {
        lat: 52.3758916,
        lng: 9.7320104,
    };
    let latlngpairs = [];

    const refreshLocations = () => {

        myMarkers.clearLayers();

        filteredStations.forEach(location => {
            latlngpairs.push([location.addressInfo.latitude, location.addressInfo.longitude])

            let coordinates = L.latLng(location.addressInfo.latitude, location.addressInfo.longitude);
            let popup = (<>Marker information here</>);

            L.circleMarker(coordinates, {
                radius: 8,
                fillColor: "FF0000",
                fillOpacity: 1,
                color: '#fff',
                weight: 3,
            }).bindPopup(
                reactElementToJSXString(popup)
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


