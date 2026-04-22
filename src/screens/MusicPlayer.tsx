import React, {useState, useEffect} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import TrackPlayer, {
    Capability,
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'
import { playListData } from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

const {width} = Dimensions.get('window')

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null | undefined>()

    useEffect(() => {
        const setup = async () => {
            try {
                await TrackPlayer.setupPlayer()
                await TrackPlayer.updateOptions({
                    capabilities: [
                        Capability.Play,
                        Capability.Pause,
                        Capability.SkipToNext,
                        Capability.SkipToPrevious,
                        Capability.Stop,
                    ],
                    compactCapabilities: [Capability.Play, Capability.Pause],
                })
                await TrackPlayer.add(playListData)
            } catch (error) {
                console.log("Setup Error:", error)
            }
        }
        setup()
    }, [])

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        if (event.type === Event.PlaybackActiveTrackChanged && event.index !== undefined) {
            const playingTrack = await TrackPlayer.getTrack(event.index)
            setTrack(playingTrack)
        }
    })

    const renderartwork = ({item}: any) => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {item.artwork && (
                        <Image
                            style={styles.albumArtImg}
                            source={{ uri: item.artwork.toString() }}
                            resizeMode="contain"
                        />
                    )}
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
    horizontal
    pagingEnabled
    snapToAlignment="center"
    decelerationRate="fast"
    snapToInterval={width} 
    disableIntervalMomentum={true}
    showsHorizontalScrollIndicator={false}
    data={playListData}
    renderItem={renderartwork}
    keyExtractor={song => song.id.toString()}
    getItemLayout={(_, index) => ({
        length: width,
        offset: width * index,
        index,
    })}
/>
            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        width: '100%',
        borderRadius: 8,
    },
});

export default MusicPlayer