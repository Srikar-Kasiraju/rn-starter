import React from "react";
import { Text, StyleSheet,View, Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  //console.log(props);
  return (
    <View>
         <Text style={styles.text}>HomeScreen</Text>
         <Button 
            onPress={() => navigation.navigate('Components')}
            title="Go to Components Demo"
          />
          
          <Button 
            onPress={() => navigation.navigate('List')}
            title="Go to List Demo"
          /> 

    </View>
  );
 
};

const styles = StyleSheet.create({
  Button:{
    marginHorizontal:10,
    margin:10,
    padding: 5  
  },
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
