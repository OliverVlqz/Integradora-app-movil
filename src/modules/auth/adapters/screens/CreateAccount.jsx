import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button, Image, Icon } from "@rneui/base"
import Fondo from '../../../../../assets/hotel.jpg'
import Logo from '../../../../../assets/Logo.png'

export default function CreateAccount(props){
    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [showMessage, setShowMessage] = useState('');

    const register = () => {
        if (!isEmpty(email) && !isEmpty(password) && !isEmpty(confirmPassword)) {
            if (password === confirmPassword) {
                setShowMessage('');
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log('Usuario registrado:', userCredential.user.uid);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error('Error al registrar:', errorCode, errorMessage);
                        setShowMessage(errorMessage);
                    });
            } else {
                setShowMessage('Las contraseñas no coinciden');
            }
        } else {
            setShowMessage('Todos los campos son obligatorios');
        }
    }

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
                    onChange={({ nativeElement: { text } }) => setEmail(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
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
                    onChange={({ nativeElement: { text } }) => setPassword(text)}
                    labelStyle={styles.label}
                    containerStyle={styles.input}
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
                placeholder="*******"
                label="Confirmar contraseña: *"
                onChange={({ nativeEvent: { text } }) => setConfirmPassword(text)}
                labelStyle={styles.label}
                containerStyle={styles.input}
                secureTextEntry={showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                        color='#ffd'
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