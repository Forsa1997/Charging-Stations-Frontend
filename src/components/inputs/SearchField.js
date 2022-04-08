import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';


const SearchField = () => {
    const provider = new OpenStreetMapProvider();

    // @ts-ignore
    const searchControl = new GeoSearchControl({
        provider: provider,
        style: 'bar',
        autoClose: true,
        keepResult: true,
        showMarker: false,
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return null;
};

export default SearchField