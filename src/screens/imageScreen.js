import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import ImageDetail from '../components/imageDetail';

const imageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={require("../../assets/forest.jpg")}
            />
            <ImageDetail
                title="Beach"
                imageSource={require("../../assets/beach.jpg")}
            />
            <ImageDetail
                title="Mountain"
                imageSource={require("../../assets/mountain.jpg")}
            />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default imageScreen;