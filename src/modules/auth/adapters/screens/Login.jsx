import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button, Image, Icon } from "@rneui/base"
import Fondo from '../../../../../assets/hotel.jpg'
import Logo from '../../../../../assets/Logo.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



import { isEmpty } from 'lodash';
import axios from "axios";

export default function Login(props) {
    //const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [showMessage, setShowMessage] = useState('');
    const navigation = useNavigation();

   

    const login =() => {
        if (!isEmpty(email) && !isEmpty(password)) {
            setShowMessage("");
            enviarDatos(email,password)
        } else {
            setShowMessage('Campo obligatorio')
        }
    }
    const enviarDatos = async (email, password) => {
        const url = 'http://192.168.0.10:8080/api/auth/signin';
        const data = {
            correo: email,
            contrasena: password
        };
    
        try {
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.data) {
                throw new Error('No se recibieron datos del servidor');
            }
    
            const token = response.data.data.token;
            console.log('Token recibido:', token);
            
    
            await AsyncStorage.setItem('token', `Bearer ${token}`);
    

        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    
      
    
    return (
        <ImageBackground source={Fondo} style={styles.background}>
            <View style={styles.container}>
                <Image
                    source={Logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Input
                    placeholder="example@example.com"
                    label="Correo electrónico: *"
                    keyboardType="email-address"
                    onChange={({ nativeEvent: { text } }) => setEmail(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
                    inputStyle={{ color: '#fff' }} // Establece el color del texto escrito
                    errorMessage={showMessage}
                    rightIcon={
                        <Icon
                            type="material-community"
                            name="email-outline"
                            color='#fff'
                        />
                    }
                />

                <Input
                    placeholder="*******"
                    label="Contraseña: *"
                    onChange={({ nativeEvent: { text } }) => setPassword(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
                    inputStyle={{ color: '#fff' }} // Establece el color del texto escrito
                    secureTextEntry={showPassword}
                    errorMessage={showMessage}
                    rightIcon={
                        <Icon
                            type="material-community"
                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                            color='#fff'
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                />

                <Button
                    title='Iniciar sesión'
                    onPress={login}
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={{ color: "black" }}
                />

                <Button
                    title='Registrate'
                    type="clear"
                    onPress={() => navigation.navigate('CreateAccount', { screen: 'CreateAccount' })}
                    />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 8
    },
    input: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    label: {
        color: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#CB9813',
        borderRadius: 18
    },
    btnContainer: {
        width: '80%'
    },
});