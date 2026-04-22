import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ControlCenter = () => {
  const playbackState = usePlaybackState()

  const state = (typeof playbackState === 'object' && playbackState !== null) 
                ? playbackState.state 
                : playbackState;
const togglePlayback = async (currentState: any) => {

    console.log("Current Player State:", currentState);

    const currentTrack = await TrackPlayer.getActiveTrackIndex();
    
    if (currentTrack !== null) {
        if (currentState === State.Paused || currentState === State.Ready || currentState === State.Stopped) {
            await TrackPlayer.play();
        } else {
            await TrackPlayer.pause();
        }
    } else {
        console.log("No track found in queue");
    }
}

  return (
    <View style={styles.container}>
      <Pressable onPress={() => TrackPlayer.skipToPrevious()}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>

      <Pressable 
        style={styles.playButton} 
        onPress={() => togglePlayback(state)}
      >
        <Icon 
          style={styles.icon} 
          name={state === State.Playing ? "pause" : "play-arrow"} 
          size={75} 
        />
      </Pressable>

      <Pressable onPress={() => TrackPlayer.skipToNext()}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 32,
  },
});

export default ControlCenter