import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const frns = [
        {name: 'frn1',age: 20, key: '1'},
        {name: 'frn2',age: 30, key: '2'},
        {name: 'frn3',age: 40, key: '3'},
        {name: 'frn4',age: 50, key: '4'},
        {name: 'frn5',age: 60, key: '5'},
        {name: 'frn6',age: 70, key: '6'},
        {name: 'frn7',age: 80, key: '7'}
    ];

    return (
    <FlatList 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(frn) => frn.name } 
        data={frns} 
            renderItem={({item}) => {
               return <Text style={styles.textStyle}>{item.name} of age {item.age}</Text>;
    }
}/>
);
};

const styles=StyleSheet.create({
    textStyle: {
        marginHorizontal:20,
        marginVertical:10
    }
});

export default ListScreen;