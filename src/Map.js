import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const mapState = {
  center: [40.19, 44.49],
  zoom: 12,
};

class MapBasics extends React.Component {
  state = { showMap: true, height: "500px", width: "700px" };

  render() {
    const { showMap, width, height } = this.state;

    return (
      <YMaps>
        <div id="map-basics">
          {showMap && (
            // When initializing the map, you must specify
            // its center and the zoom factor.
            <Map state={mapState} width={width} height={height} />
          )}
        </div>
      </YMaps>
    );
  }
}

export default MapBasics;
