import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text} from 'react-native';
import { Input, Button, Image, Icon } from "@rneui/base"
import Fondo from '../../../../../assets/hotel.jpg'
import Logo from '../../../../../assets/Logo.png'
import axios from 'axios';

const DEFAULT_ROLE = 3;


export default function CreateAccount({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [showPassword, setShowPassword] = useState(true);
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [maternalLastName, setMaternalLastName] = useState(""); 
    const [showMessage, setShowMessage] = useState('');

    const register = async () => {
        try {
            if (!email || !password || !confirmPassword || !firstName || !lastName || !maternalLastName) {
                setShowMessage('Todos los campos son obligatorios');
                return;
            }

            if (password !== confirmPassword) {
                setShowMessage('Las contraseñas no coinciden');
                return;
            }

            // Puedes agregar más validaciones aquí, como el formato del correo electrónico, la seguridad de la contraseña, etc.

            const url = 'http://192.168.0.10:8080/api/usuario/registro/';
            const data = {
                correo: email,
                contrasena: password,
                nombre: firstName,
                apellidoP: lastName,
                apellidoM: maternalLastName,
                status: true,
                role: {
                    id_role: DEFAULT_ROLE 
                }
    
            };
    
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.data) {
                throw new Error('No se recibieron datos del servidor');
            }

            navigation.navigate('Login');
        } catch (error) {
            console.error('Error:', error.message);
            setShowMessage('Error al registrar, por favor intenta nuevamente');
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
                    placeholder="Nombre"
                    label="Nombre:"
                    onChange={({ nativeEvent: { text } }) => setFirstName(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
                    inputStyle={{ color: '#fff' }}
                />
                <View style={styles.namesContainer}>
                    <View style={styles.nameInput}>
                        <Input
                            placeholder="Apellido Paterno"
                            label="Apellido Paterno:"
                            onChange={({ nativeEvent: { text } }) => setLastName(text)}
                            labelStyle={styles.label}
                            containerStyle={styles.input}
                            inputStyle={{ color: '#fff' }}
                        />
                    </View>
                    <View style={styles.nameInput}>
                        <Input
                            placeholder="Apellido Materno"
                            label="Apellido Materno:"
                            onChange={({ nativeEvent: { text } }) => setMaternalLastName(text)}
                            labelStyle={styles.label}
                            containerStyle={styles.input}
                            inputStyle={{ color: '#fff' }}
                        />
                    </View>
                </View>
                <Input
                    placeholder="example@example.com"
                    label="Correo electrónico: *"
                    keyboardType="email-address"
                    onChange={({ nativeEvent: { text } }) => setEmail(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
                    inputStyle={{ color: '#fff' }} 
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
                    placeholder="*"
                    label="Contraseña: *"
                    onChange={({ nativeEvent: { text } }) => setPassword(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
                    inputStyle={{ color: '#fff' }} 
                    secureTextEntry={showPassword}
                    rightIcon={
                        <Icon
                            type="material-community"
                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                            color='#fff'
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    errorMessage={showMessage}
                />
                <Input
                    placeholder="*"
                    label="Confirmar contraseña: *"
                    onChange={({ nativeEvent: { text } }) => setConfirmPassword(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
                    inputStyle={{ color: '#fff' }} 
                    secureTextEntry={showPassword}
                    rightIcon={
                        <Icon
                            type="material-community"
                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                            color='#fff'
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    errorMessage={showMessage}           
                />
                <Button
                    title='Registrarse'
                    onPress={register}
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={{ color: "black" }}
                />
                {showMessage ? <Text style={styles.errorMessage}>{showMessage}</Text> : null}
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
    namesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 8
    },
    nameInput: {
        flex: 1,
        paddingHorizontal: 8
    }
});
