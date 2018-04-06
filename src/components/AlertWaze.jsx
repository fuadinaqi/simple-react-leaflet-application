import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWazeAlert }  from '../store/actions'
import { trafficIcon, weatherIcon, roadIcon, accidentIcon } from '../Icon'

import MarkerType from './MarkerType'

class AlertWaze extends Component {
  state = {
    lat: -6.1751,
    lng: 106.8650,
    zoom: 12,
  }
  
  componentWillMount () {
    this.props.fetchWazeAlert()
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const { waze } = this.props
    if (waze.isLoading) {
      return (
        <div>
          <img src='https://zippy.gfycat.com/SimilarPlumpBarasingha.gif' alt='loading bar' />
        </div>
      )
    } else if (waze.isError) {
      return (
        <div>
          <h1>Error . . </h1>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Waze Alerts</h3>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              waze.data.map((mark) => {
                var data = {
                  y: mark.location.y,
                  x: mark.location.x,
                  description: mark.reportDescription,
                  city: mark.city,
                  street: mark.street
                }
                switch (mark.type) {
                  case 'JAM':
                    data = { 
                      ...data,
                      icon: trafficIcon,
                      type: 'Traffic Jam',
                      colorType: '#9f2828',
                    }
                    return <MarkerType data={data}/>
                  case 'WEATHERHAZARD':
                    data = { 
                      ...data,
                      icon: weatherIcon,
                      type: 'Weather Hazard',
                      colorType: '#0594d9',
                    }
                    return <MarkerType data={data}/>
                  case 'ROAD_CLOSED':
                    data = { 
                      ...data,
                      icon: roadIcon,
                      type: 'Road Closed',
                      colorType: '#000',
                    }
                    return <MarkerType data={data}/>
                  case 'ACCIDENT':
                    data = { 
                      ...data,
                      icon: accidentIcon,
                      type: 'Accident!',
                      colorType: '#a3a328',
                    }
                    return <MarkerType data={data}/>
                  default:
                    return ''
                }
              })
              
            }
          </Map>
        </div>
      )
    }
  }
};

const mapStateToProps = state => ({
  waze: state.waze
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWazeAlert
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AlertWaze)