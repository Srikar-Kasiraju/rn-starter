import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () =>{
    const greeting='Bye there!';
    return  (
    <View>
        <Text style={styles.textStyle}> This is the componentsScreen </Text>
        <Text>Hi There!!!</Text>
        <Text>{greeting}</Text>
    </View>);

};

const styles=StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;