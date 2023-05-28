
import serviceChangeMarkerIcon from "./services";
import { Icon } from 'leaflet';


test("test change marker icon", () => {

    const largeIcon = new Icon({
        iconUrl: '/img/location-marker.png',
        iconSize: [50, 50],
    });
  
    const exapleCity = {
        "mesto": "Banská Bystrica",
        "pocetObyvatelov": 78881,
        "psc": "974 01",
        "select": {
            "type": false,
            "target": ""
        },
        "krajske": true,
        "coordinates": {
            "latitude": 48.73583,
            "longitude": 19.14556
        }
    }
    const testedfunkcion = serviceChangeMarkerIcon.changeMarkerIcon(exapleCity)
    expect(testedfunkcion).toMatchObject(largeIcon);
})