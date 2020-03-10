import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentsScreen = () => {

    const name= "Matias";


    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.secondElement}>Mi name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    secondElement: {
        fontSize: 20,
    }
});

export default ComponentsScreen;