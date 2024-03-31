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
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [maternalLastName, setMaternalLastName] = useState(""); 
    const [showMessage, setShowMessage] = useState({email: '', password: '', confirmPassword: '', firstName: '', lastName: '', maternalLastName: ''});

    const register = () => {
        if (!isEmpty(email) && !isEmpty(password) && !isEmpty(confirmPassword)) {
            if (password === confirmPassword) {
                setShowMessage({email: '', password: '', confirmPassword: ''});
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
                setShowMessage({email: '', password: '', confirmPassword: 'Las contraseñas no coinciden'});
            }
        } else {
            setShowMessage({email: 'Campo obligatorio', password: 'Campo obligatorio', confirmPassword: 'Campo obligatorio', firstName: 'Campo obligatorio', lastName: 'Campo obligatorio', maternalLastName: 'Campo obligatorio'});
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
                            placeholder="Nombre"
                            label="Nombre:"
                            onChange={({ nativeEvent: { text } }) => setFirstName(text)}
                            labelStyle={styles.label}
                            containerStyle={styles.input}
                            inputStyle={{ color: '#fff' }}
                            errorMessage={showMessage.firstName}
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
                            errorMessage={showMessage.lastName}
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
                            errorMessage={showMessage.maternalLastName}
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
                    errorMessage={showMessage.email}
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
                    errorMessage={showMessage.password}
                />
                <Input
                    placeholder="*******"
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
                    errorMessage={showMessage.confirmPassword}           
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
