import React from "react";
import "../style/Maps.style.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import citiesJSON from "../../utils/cities.json"
import { Container } from "../../Container";

import { TypeCitesArray } from "../../Container/types";
import { TypeCitesObject } from "../../Container/types";





function Maps(): JSX.Element {
    const [allcities, setAllcities] = React.useState<TypeCitesArray>([])
    const { setCities, cities } = React.useContext(Container.Context)
    let newCityArray: TypeCitesArray = []

    /* nastavenie zoznamu vsetkych miest */
    React.useEffect(() => {
        setAllcities(citiesJSON)
    }, [])

    /* funkcia po kliknuti na marker oznacenie selectoru v objekte*/
    const handleMarkerClick = (city: TypeCitesObject) => {
        cities.forEach((item: TypeCitesObject) => {
            if (item.mesto === city.mesto) {
                item.select = true
            } else {item.select = false }
            newCityArray.push(item)
        })
        setCities(newCityArray)
    }


    /* create marker icon */


    const normalIcon = new Icon({
        iconUrl: '/img/marker.png',
        iconSize: [30, 30],
    });

    const largeIcon = new Icon({
        iconUrl: '/img/marker.png',
        iconSize: [60, 60],
    });

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
                            eventHandlers={{ click: (e) => { handleMarkerClick(city) } }}
                            icon={city.krajske ? largeIcon : normalIcon}>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default Maps
