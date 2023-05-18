import React from "react";
import "../style/Maps.style.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import cites from "../../utils/cities.json"

type TypeCitesObject = {
    meno: string,
    psc: string,
    obyvatelia: number,
    coordinates: {
        latitude: number,
        longitude: number
    }
}
type TypeCitiesArray = {
    meno: string,
    psc: string,
    obyvatelia: number,
    coordinates: {
        latitude: number,
        longitude: number
    }
}[]

function Maps(): JSX.Element {
    const [allcities, setAllcities] = React.useState<TypeCitiesArray>([])

    /* nastavenie zoznamu vsetkych miest */
    React.useEffect(() => {
        setAllcities(cites)
    }, [])


    /* funkcia po kliknuti na marker */
    const handleMarkerClick = (cities: TypeCitesObject) => {
        console.log(cities);

    }
    /* create marker icon */
    const customIcon = new Icon({
        iconUrl: '/img/marker.png',
        iconSize: [30, 30],
    });

    return (
        <div className="maps">
            <MapContainer
                center={[48.7411522, 19.4528646]}
                zoom={8}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {
                    allcities.map((cities: TypeCitesObject, index: number) => (
                        <Marker
                            key={index}
                            position={[cities.coordinates.latitude, cities.coordinates.longitude]}
                            eventHandlers={{ click: (e) => { handleMarkerClick(cities) } }}
                            icon={customIcon}>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default Maps
