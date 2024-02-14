import React from "react";
import { View,Text, StyleSheet } from "react-native";
import ImageDetail from "./Components/ImageDetails";

const ImageScreen = () =>{
    return <View>
        <ImageDetail title="Forest" />
        <ImageDetail title="Beach" />
        <ImageDetail title="Mountain"/>
    </View>
};

const styles=StyleSheet.create({

})

export default ImageScreen;