import React from 'react';
import {FlatList,StyleSheet,Text,View} from 'react-native';
const hobbies = [
    {id:'1', name:'Reading novels'},
    {id:'2', name:'Playing guitar'},
    {id:'3', name:'Cooking'},
    {id:'4', name:'Hiking'},
    {id:'5', name:'Writing'},
];

const HobbiesScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>My Hobbies</Text>
            <FlatList
                data={hobbies}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Text style={styles.hobbyItem}>{item.name}</Text>}
                />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor:'#fff',

    },
    title:{
        fontSize:26,
        fontWeight:'bold',
        marginfBottom:20,
    },
    listContent:{
        paddingBottom:8,
        paddingTop:8,
    },
    hobbyItem:{
        fontSize:18,
        padding:12,
        backgroundColor:'#f0f0f0',
        borderRadius:8,
        marginBottom:10, 
    },
});
export default HobbiesScreen;