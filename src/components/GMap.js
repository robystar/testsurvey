import React from "react";
import { GoogleMap, OverlayView, useJsApiLoader, useGoogleMap } from "@react-google-maps/api";
import {mapkey} from '../config'

const containerStyle = {
  width: "900px",
  height: "600px",
};

const center = {
  lat: 45.1,
  lng: 8.26,
};

const divStyle = {
  background: "white",
  border: "1px solid #ccc",
  padding: 15,
};

const onClick = () => {
  console.info("I have been clicked!");
};

const extraMapTypes = ["TERRAIN"];

function GMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey:mapkey,
    // ...otherOptions
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    //const bounds = new window.google.maps.LatLngBounds();
    //map.fitBounds(bounds);
    console.log(map)
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that

    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        //extraMapTypes={extraMapTypes}
        mapTypeId='roadmap'
        clickableIcons={false}
        center={center}
        tilt={0}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {
          // ...Your map components
        }

        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div style={divStyle}>
            <h1>OverlayView</h1>

            <button onClick={onClick} type="button">
              Click me
            </button>
          </div>
        </OverlayView>
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Attendi</div>;
}

export default React.memo(GMap);
