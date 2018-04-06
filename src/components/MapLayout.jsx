import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchReports } from '../store/actions'

class MapLayout extends Component {
  state = {
    lat: -6.1751,
    lng: 106.8650,
    zoom: 12,
  }

  componentWillMount () {
    this.props.fetchReports()
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const { report } = this.props
    if (report.isLoading) {
      return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      )
    } else if (report.isError) {
      return (
        <div>
          <h1>Error . . </h1>
        </div>
      )
    } else {
      return (
        <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            report.data.map((mark, i) => (
              <Marker key={i} position={[mark.lat, mark.lng]}>
                <Popup>
                  <span>
                    { mark.description }
                  </span>
                </Popup>
              </Marker>
            ))
          }
        </Map>
        </div>
      )
    }
  }
};

const mapStateToProps = state => ({
  report: state.report
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchReports
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MapLayout)
