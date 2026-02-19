import React from "react";
import {View,Text,StyleSheet} from 'react-native';


const StudentScreen = () => {
    const firstName = 'Jon"'
    const lastName = 'Behra'
    let fullName = `${firstName} ${lastName}`;
    fullName = `${fullName}`;

    const birthday = 'March 14,2008';
    const city = 'Prishtina';
    const classroom = '12th Grade';

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Student Information</Text>
            <View style={styles.infoCard}>
                <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}>{fullName}</Text>
                <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}>{fullName}</Text>
                <Text style={styles.label}>Birthday:</Text>
            <Text style={styles.value}>{birthday}</Text>
                <Text style={styles.label}>City:</Text>
            <Text style={styles.value}>{city}</Text>
                <Text style={styles.label}>Classroom:</Text>
            <Text style={styles.value}>{classroom}</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff',
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:20,
    },
    infoCard:{
        backgroundColor:'#ffffff',
        padding:15,
        borderRadius:14,
        borderWidth:1,
        borderColor:'#dbe4ff'
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:10,
        color:'#457b9d'
    },
    value:{
        fontSize:16,
        color:'#1d3557',
        marginTop:2,
    },
});
export default StudentScreen;