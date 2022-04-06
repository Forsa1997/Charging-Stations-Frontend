import {MapContainer, Marker, TileLayer, ZoomControl} from 'react-leaflet';
// eslint-disable-next-line
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import useGeoLocation from '../hooks/useGeoLocation';
import SearchField from './inputs/SearchField';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Fab from '@mui/material/Fab';
import * as React from "react";


export default function ChargingMap(props) {

    const filteredStations = useSelector(state => state.mapReducer.filteredData)
    const [myMarkers, setMyMarkers] = useState(L.markerClusterGroup());
    const [map, setMap] = useState(null)
    const location = useGeoLocation();

    const showMyLocation = () => {
        if (location.loaded && !location.error) {
            map.flyTo([location.coordinates.lat, location.coordinates.lng], 13, {animate: true})
        } else {
            alert(location.error.message)
        }
    }

    useEffect(() => {
        refreshLocations();
    }, [filteredStations]) // eslint-disable-line react-hooks/exhaustive-deps

    const setMapReference = (map) => {
        refreshLocations();
        setMap(map);
        myMarkers.addTo(map);
        map.on('popupopen', (e) => { alert(e.popup._source._popup._content); });
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
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    });

    const greenIcon = new L.Icon({
        ...redIcon.options,
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    });

    const iconColor = (power) => {
        if (power >= 150) {
            return redIcon;
        } else if (power >= 50) {
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
            let popup =  location.addressInfo.title + "<br>"
                       + location.addressInfo.addressLine1 + "<br>"
                       + location.addressInfo.town + "<br>";         
            L.marker(coordinates, {icon: iconColor(location.maxChargePower)}).bindPopup(popup).addTo(myMarkers);
        })
    };

    if (latlngpairs.length > 0) {
        const bounds = L.latLngBounds(latlngpairs.map((c) => {
            return [c[0], c[1]];
        }));
        map.fitBounds(bounds);
    }

    return (
        <div style={{ position: 'absolute', width: '100vw', height: 'calc(100vh - 68.31px)'}}>
            <MapContainer zoomControl={false} center={center} zoom={10} whenCreated={setMapReference}
                          scrollWheelZoom={true} preferCanvas={true} renderer={L.canvas()}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {location.loaded && !location.error && (
                    <Marker position={[location.coordinates.lat, location.coordinates.lng]}/>
                )}
                <ZoomControl position={"bottomright"}/>
                <SearchField />
            </MapContainer>
            <Fab color='secondary' size='large' onClick={showMyLocation} sx={{
                position: 'absolute',
                zIndex: 1,
                right: 53,
                bottom: 30

            }} >
                <MyLocationIcon/>
            </Fab>
        </div>
    )
}


