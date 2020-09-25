import React from 'react';
import MapView from "react-native-maps";
import OpenMap from "react-native-open-maps";

export default function Map(props) {
    const {location,name,height} = props;

    const openAppMap = () => {
        OpenMap ({
            latitude: location.latitude,
            longitude: location.longitude,
            zoom: 19,
            query:name,
        })
    }    
    
    return (
        <MapView
            style={{
                height:height, 
                width:"90%",
                borderRadius:25,
            }}
            initialRegion={location}
            onPress={openAppMap}
        >
            <MapView.Marker
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude
                }}
            />
        </MapView>
    )
}