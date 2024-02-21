import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CreateAccount(){
    return(
        <View style = {styles.container}>
            <Text>Creacion de cuenta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: "center",
        justifyContent:"center"
    }
})