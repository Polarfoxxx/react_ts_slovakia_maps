import React from "react";
import "../style/Maps.style.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import servicesCitiesJSON from "../../utils/services";
import { Container } from "../../Container";
import { TypeIcon } from "../type";
import { TypeCitesArray } from "../../utils/types";
import { TypeCitesObject } from "../../utils/types";
import servicesObjectDesignationFromJSON from "../../Table/services";
import * as L from 'leaflet';


function Maps(): JSX.Element {
    const [allcities, setAllcities] = React.useState<TypeCitesArray>([])
    const { setCities } = React.useContext(Container.Context)

    /* nastavenie zoznamu vsetkych miest */
    React.useEffect(() => {
        setAllcities(servicesCitiesJSON.citiesJSON)
    }, [])

    /* funkcia po kliknuti na marker oznacenie selectoru v JSONe*/
    const handleMarkerClick = (city: string, e: L.LeafletMouseEvent) => {
       const mapEvent =  e.target.options.pane
         setCities(servicesObjectDesignationFromJSON.objectDesignationFromJSON(city, mapEvent))
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
        city.krajske ? (city.select.type ? selectIcon : largeIcon) : (city.select.type ? selectIcon : normalIcon);


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
                            eventHandlers={{ click: (e) => { handleMarkerClick(city.mesto, e) } }}
                            icon={iconType(city)}>
                            <Popup
                                className="mapMarker">
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
