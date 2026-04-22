import { SafeAreaView, StyleSheet, Text, View ,ActivityIndicator , StatusBar } from 'react-native'
import TrackPlayer, { Capability } from 'react-native-track-player';
import React, { useState, useEffect } from 'react'
import { setupPlayer, addTrack } from '../service';
import MusicPlayer from './screens/MusicPlayer';
const App = () => {
  const [isplayerReady, setIsplayerReady] = useState(false)

  async function setup() {
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }
    setIsplayerReady(isSetup)
  }
  useEffect(
    ()  => {

}, []
)
if (!isplayerReady) {
  <SafeAreaView>
    <ActivityIndicator />
  </SafeAreaView>
}
return (
  <View style={styles.container}>
<StatusBar barStyle={'light-content'} />
<MusicPlayer />
  </View>
)
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})