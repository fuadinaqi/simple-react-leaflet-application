import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
// import { redIconMarker } from '../Icon'

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
        <div>
          <img src='https://zippy.gfycat.com/SimilarPlumpBarasingha.gif' alt='loading bar' />
        </div>
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
          <h3>Qlue's Reports</h3>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              report.data.map((mark) => (
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
