import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet'

export default class MarkerType extends Component {
  render() {
    var { data } = this.props
    return (
      <Marker position={[data.y, data.x]} icon={data.icon}>
        <Popup>
          <div>
            <p style={{color: data.colorType}}>{data.type}</p>
            <p>{data.description}</p>
            <hr />
            City: {data.city} <br/>
            Street: {data.street}
          </div>
        </Popup>
      </Marker>
    )
  }
};
