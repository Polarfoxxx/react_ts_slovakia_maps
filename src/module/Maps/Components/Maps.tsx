import React from "react";
import "../style/Maps.style.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import citiesJSON from "../../utils/cities.json"
import { Container } from "../../Container";
import { TypeIcon } from "../type";
import { TypeCitesArray } from "../../Container/types";
import { TypeCitesObject } from "../../Container/types";
import servicesObjectDesignationFromJSON from "../../Table/services";


function Maps(): JSX.Element {
    const [allcities, setAllcities] = React.useState<TypeCitesArray>([])
    const { setCities } = React.useContext(Container.Context)

    /* nastavenie zoznamu vsetkych miest */
    React.useEffect(() => {
        setAllcities(citiesJSON)
    }, [])

    /* funkcia po kliknuti na marker oznacenie selectoru v JSONe*/
    const handleMarkerClick = (city: string) => {
        setCities(servicesObjectDesignationFromJSON.objectDesignationFromJSON(city))
    }

    /* create marker icon */
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
    /* funkcia meniaca markery */
    const iconType = (city: TypeCitesObject): Icon<TypeIcon> =>
        city.krajske ? (city.select ? selectIcon : largeIcon) : (city.select ? selectIcon : normalIcon);


    return (
        <div className="maps">
            <MapContainer
                center={[48.7411522, 19.4528646]}
                zoom={8}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    allcities.map((city: TypeCitesObject, index: number) => (
                        <Marker
                            key={index}
                            position={[city.coordinates.latitude, city.coordinates.longitude]}
                            eventHandlers= {{click: (e) => {handleMarkerClick(city.mesto)}}}
                            icon={iconType(city)}>
                                <Popup>
                                    {city.mesto}
                                </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>

    )
}

export default Maps
