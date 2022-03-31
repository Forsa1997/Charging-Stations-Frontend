import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import stationData from "../data/stationData.json"
import MarkerClusterGroup from 'react-leaflet-markercluster';



export default function ChargingMap() {

    // const filteredStations = teslaData.filter(tesla => tesla.address.country ==="Germany")

    return (
        <MapContainer center={[52.3758916, 9.7320104]} zoom={6} s>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {stationData.map(station => (
                    <Marker key={station.id}
                        position={[station.addressInfo.latitude, station.addressInfo.longitude]} >
                        <Popup>
                            <h2>{station.connections.filter(connection => connection.statusTypeID === 50).length} out of {station.connections.length} stations are working!</h2>
                            <h4>{station.addressInfo.addressLine1}, {station.addressInfo.town}</h4>
                            <h4>Max Charge Power: {Math.max.apply(Math, station.connections.map(function (o) { return o.powerKW }))} KW</h4>

                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>

    )
}