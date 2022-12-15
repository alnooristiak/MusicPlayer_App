import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// Window Width
const {width, height} = Dimensions.get("window")

const MusicPlayer = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>MusicPlayer</Text>
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
    IconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
})