import React from "react";
import {View,Text,StyleSheet} from 'react-native';





const StudentScreen = () => {

    <Text style={styles.textStyle}>List of Students</Text>
    let message = "Hi There"
    message = "Welcome to StudentScreen"
    let name = "Jon"
    let surname = "Behra"
    const firstName = "Jon"
    const lastName = "Behra"
    let fullName = firstName + " " + lastName
    let Birthday= "January 23,2008"

    l

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{message}</Text>
            <Text style={styles.textStyle}>{firstName}</Text>
            <Text style={styles.textStyle}>{lastName}</Text>
            <Text style={styles.textStyle}>{fullName}</Text>
            <Text style={styles.textStyle}>{Birthday}</Text>
        </View>
    )
};