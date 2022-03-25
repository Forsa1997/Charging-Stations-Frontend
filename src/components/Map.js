import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import teslaData from "../data/teslaSupercharger"
import MarkerClusterGroup from 'react-leaflet-markercluster';




const Map = () => {

    return (
        <MapContainer center={[52.3758916, 9.7320104]} zoom={10}>
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
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

    )

}

export default Map