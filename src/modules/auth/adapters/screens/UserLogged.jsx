import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from "./Profile";
import UserGuest from "../screens/UserGuest";
import Navigation from "../../../navigation/Navigation";   
import HomeStack from "../../../stack/HomeStack";

export default function UserLogged(props) {
    const { navigation } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                setIsLoggedIn(!!token); 
            } catch (error) {
                console.error('Error al verificar la autenticación:', error);
            } finally {
                setIsLoading(false);
            }
        };

        checkLoggedIn();
    }, []);

    // if (isLoading) {
    //     return <Loading visible={true} title="Cargando" />;
    // }

    return isLoggedIn ? 
        <HomeStack navigation={navigation} />
    : 
        <UserGuest navigation={navigation} />; 
}
