import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242,1)'
    },
    navigation: {
        flex: 2,
    },
    body : {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
    },
    deliveryIcon: {
        width: 120,
        height: 120
    }
})

export const LandingScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.navigation}>
            </View>
            <View style={styles.body}>
                <Image source={require('../images/food-icon-delivery.png')} style={styles.deliveryIcon} />
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

