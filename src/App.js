import React, { Component } from 'react';
import { Icon } from 'leaflet'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

import HeaderTitle from './components/HeaderTitle.jsx'
import MapLayout from './components/MapLayout'

Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HeaderTitle />
          <MapLayout />
        </div>
      </Provider>
    );
  }
}

export default App;
