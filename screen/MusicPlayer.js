import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

// Window Width
const {width, height} = Dimensions.get("window")

const MusicPlayer = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>MusicPlayer</Text> */}

            {/* === Song Banner Image Section === */}
            <View style={styles.imgWrapper}>
                <Image 
                source={require('../assets/img/img1.jpg')} 
                style={styles.musicImage} />
            </View>

            {/* === Song Tittle & Artist Name Section === */}
            <View style={styles.songTexts}>
                <Text style={styles.songTitle}>Song Tittle</Text>
                <Text style={styles.singerName}>Artist Name</Text>
            </View>

            {/* === Slaider Section === */}
            <View style={styles.slaiderContainer}>
            <Slider
            // style={{width: 200, height: 40}}
            style={styles.slaiderProgress}
            value={10}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#27ae60"
            thumbTintColor="#9b59b6"
            maximumTrackTintColor="#2980b9"
            onSlidingComplete={()=> {}}
            />
            </View>

            {/* === Progress bar song time counter Section === */}
            <View style={styles.songTimgContainer}>
                <Text style={styles.songTimgText}>00:00</Text>
                <Text style={styles.songTimgText}>00:00</Text>
            </View>

            {/* === Bottom Nav Icon Section === */}
            <View style={styles.IconContainer}>
                <View style={styles.btnContainer}>
                    {/* === Hert Outline === */}
                    <TouchableOpacity onPress={() => console.log("clicked")}>
                        <FontAwesome name="heart-o" size={24} color="black" />
                    </TouchableOpacity>

                    {/* === Repeat Outline === */}
                    <TouchableOpacity onPress={() => console.log("clicked")}>
                        <Ionicons name="repeat-outline" size={24} color="black" />
                    </TouchableOpacity>

                    {/* === Share Alternative === */}
                    <TouchableOpacity onPress={() => console.log("clicked")}>
                        <Entypo name="share-alternative" size={24} color="black" />
                    </TouchableOpacity>

                    {/* === Ellipsis === */}
                    <TouchableOpacity onPress={() => console.log("clicked")}>
                        <FontAwesome5 name="ellipsis-h" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        position: 'relative'
    },
    imgWrapper: {
        flex: 1,
        width: 300,
        height: 340,
        alignSelf: 'center',
        marginTop: 50,
    },
    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    IconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    songTexts: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    songTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        // color: 'white'
    },
    singerName: {
        fontWeight: 'bold',
        fontSize: 15
    },
    // Progress slaider 
    slaiderProgress: {
        marginTop: 40,
    },
    songTimgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 5,
    },
    songTimgText: {
        fontWeight: 'bold'
    },
    btnContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        borderTopWidth: 1,
        borderColor: 'green',
        padding: 15,
    },
})