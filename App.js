import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet, Platform } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.121984,
          longitude: 115.064814
        },
        title: 'Krisna Beach Street',
        subtitle: 'Salah satu cabang Krisna yang berupa bar dan restaurant dengan menu lokal dan internasional'
      },
      {
        key:2,
        latlng: {
          latitude:-8.180499,
          longitude: 114.986540
        },
        title: 'Krisna Water Sport',
        subtitle: 'Salah satu cabang Krisna berupa tempat wisata air yang terletak di desa Temukus, Kabupaten Buleleng, Bali.'
      },
      {
        key:3,
        latlng: {
          latitude:-8.178866,
          longitude: 114.994267
        },
        title: 'Krisna Funtastic Land',
        subtitle: 'Salah satu cabang Krisna yang menyediakan fasilitaas taman bermain area terbuka yang terletak di desa Temukus, Kabupaten Buleleng, Bali.'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Cabang Krisna di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> {'\u00A9'}DithaSavitri </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#e98df5',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#e98df5',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});