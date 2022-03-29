import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import teslaData from "../data/teslaSupercharger"
import MarkerClusterGroup from 'react-leaflet-markercluster';
import * as React from 'react';
import Box from '@mui/material/Box';


const Map = () => {

    return (
        <Box
            style={{ height: 'calc(100vh - 70px)' }}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <Box sx={{
                width: '30%',
                bgcolor: 'grey.700',

            }}
            />
            <Box sx={{
                width: '70%',
            }}>
                <MapContainer center={[52.3758916, 9.7320104]} zoom={10} s>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup>
                        {teslaData.map(tesla => (
                            <Marker key={tesla.id}
                                position={[tesla.gps.latitude, tesla.gps.longitude]} >
                                <Popup>
                                    Status: {tesla.status}<br />
                                    {tesla.name}<br />
                                    {tesla.address.street}, {tesla.address.city}<br />
                                    Stallcount: {tesla.stallCount}<br />
                                    Max Charge Power: {tesla.powerKilowatt} KW
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </Box>
        </Box>
    )

}

export default Map