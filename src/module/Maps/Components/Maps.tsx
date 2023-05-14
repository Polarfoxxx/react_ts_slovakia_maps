import React from "react";
import "../style/Maps.style.css"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";


function Maps(): JSX.Element {



    const position: any = [48.7411522,  19.4528646]
    
    return (
        <div className="maps">
            <MapContainer
                center={[48.7411522, 19.4528646]}
                zoom={8}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Maps
