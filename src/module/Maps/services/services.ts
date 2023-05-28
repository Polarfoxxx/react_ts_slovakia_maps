
import { TypeIcon } from "../type";
import { Icon } from 'leaflet';
import { TypeCitesObject } from "../../utils/types";

const serviceChangeMarkerIcon = {
    changeMarkerIcon
}
export default serviceChangeMarkerIcon


const normalIcon: Icon<TypeIcon> = new Icon({
    iconUrl: '/img/location-marker.png',
    iconSize: [30, 30],
});
const largeIcon: Icon<TypeIcon> = new Icon({
    iconUrl: '/img/location-marker.png',
    iconSize: [50, 50],
});
const selectIcon: Icon<TypeIcon> = new Icon({
    iconUrl: '/img/select Marker.png',
    iconSize: [45, 70],
});


function changeMarkerIcon(city: TypeCitesObject): Icon<TypeIcon> {
    const iconMarker = city.krajske ? (city.select.type ? selectIcon : largeIcon) : (city.select.type ? selectIcon : normalIcon)  
    return (
        iconMarker
    )
}