import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet'

export default class ReportMarker extends Component {
  render() {
    if (this.props.isShow) {
      return (
        <div>
          {
            this.props.report.data.map((mark) => (
              <Marker key={mark.id} position={[mark.lat, mark.lng]}>
                <Popup>
                  <div>
                    <span>
                      { mark.description }
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))
          }
        </div>
      )
    } else {
      return ''
    }
  }
};
