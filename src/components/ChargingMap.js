import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import teslaData from "../data/teslaSupercharger"
import MarkerClusterGroup from 'react-leaflet-markercluster';



export default function ChargingMap() {

const filteredStations = teslaData.filter(tesla => tesla.address.country ==="Germany")

    return(
     <MapContainer center={[52.3758916, 9.7320104]} zoom={6} s>
     <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     <MarkerClusterGroup>
         {filteredStations.map(tesla => (
             <Marker key={tesla.id}
                 position={[tesla.gps.latitude, tesla.gps.longitude]} >
                 <Popup>
                     <h2>Status: {tesla.status}<br /></h2>
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