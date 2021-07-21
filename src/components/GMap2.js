import React from "react";
import GoogleMapReact from "google-map-react";

const mapProps = { bootstrapURLKeys:{ key: process.env.REACT_APP_MAP_KEY }, center: { lat: 28.2723379, lng: -16.6468854 }, zoom: 10 };

export default function GMap2() {
  const [isDraggable, setIsDraggable] = React.useState(false);
  const handleCheckboxChange = (e) => setIsDraggable(e.target.checked);
  
  const mapStyles = { height: 250, width: "100%" };

  return (
    <div className="App">
      <input
        id="checkbox"
        type="checkbox"
        checked={isDraggable}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox">Draggable</label>
      <div style={mapStyles}>
        <GoogleMapReact {...mapProps} draggable={isDraggable} />
      </div>
      <div style={mapStyles}>
        <GoogleMapReact {...mapProps} options={{ draggable: isDraggable }} />
      </div>
      <div style={mapStyles}>
        <GoogleMapReact
          {...mapProps}
          draggable={isDraggable}
          someOtherPropToTriggerComponentUpdate={isDraggable}
        />
      </div>
    </div>
  );
}
