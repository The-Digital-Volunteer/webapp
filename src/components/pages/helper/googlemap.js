import React, {Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Pagination from "react-bootstrap/Pagination";

const mapStyles = {
  width: '100vw',
  height: '60vh'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [
                {
                    "items": [
                        {
                            "name": "Freddy Fuego Hausmannsgate",
                            "category": "food",
                            "id": 0,
                            "lat": 59.917792,
                            "lng": 10.754015
                        },
                        {
                            "name": "Venedig Pizzeria Restaurang & Café",
                            "category": "food",
                            "id": 1,
                            "lat": 56.045759,
                            "lng": 12.697704
                        },
                        {
                            "name": "Morten Volunteer",
                            "category": "volunteer",
                            "id": 2,
                            "lat": 56.045759,
                            "lng": 12.697704
                        }
                    ]
                }
            ]
        };
    }

  render() {
      const { items } = this.state;
      const test = items[0].items;

      let pins = [];

      for(let i =0; i < 10; i++) {
          if(test[i]){
              pins.push(
                  <Pagination.Item key={i}>
                  </Pagination.Item>
              )
          }
      }

      function setDetails() {
          //process data and open up new screen
      }

    return (
        <div>
            <div id="pins-wrapper">
                <h3>Filter pins</h3>
                <Pagination className="map-pin">{ pins }</Pagination>
            </div>
            <Map
                className = "map-container"
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}

                {...test.map((pin) => (
                    <Marker
                        className={pin.category}
                        key={pin.id}
                        position={{
                            lat: pin.lat,
                            lng: pin.lng
                        }}
                        icon={{
                            url: `insert_filename_here`
                        }}
                        onClick={() => {
                            setDetails(pin);
                        }}
                    />
                    )
                )}
            />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
