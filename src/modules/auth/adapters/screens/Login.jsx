import React, {useState} from "react";
import { View, StyleSheet } from 'react-native';
import {Input, Button, Image, Icon} from "@rneui/base"



import { isEmpty } from 'lodash';

export default function Login(props){
    const {navigation} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState(true);
    const [showMeassage, setShowMessage] = useState('');

    const login = () =>{
        if(!isEmpty(email) && !isEmpty(password)){
            setShowMessage('');
        }else{
            setShowMessage('Campo obligatorio')
        }
    }
    return(
        <View style = {styles.container}>           
           <Input
            placeholder="lizzz@utez.edu.mx"
            label="Correo electrónico: *"
            keyboardType="email-address"
            onChange= {({nativeElement: {text}})=> setEmail(text)} //es una call back function, es decir regresa algo
            labelStyle={styles.label}
            containerStyle={styles.input}
            errorMessage={showMeassage}
            rightIcon={
                <Icon
                type="material-community"
                name="email-outline"
                color='#000'
                />
            }
            />

             <Input
            placeholder="*******"
            label="Contraseña: *"
            onChange= {({nativeElement: {text}})=> setPassword(text)} //es una call back function, es decir regresa algo
            labelStyle={styles.label}
            containerStyle={styles.input}
            secureTextEntry={showPassword}
            errorMessage={showMeassage}

            rightIcon={
                <Icon
                type="material-community"
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                color='#000'
                onPress={() => setShowPassword(!showPassword)}
                />
            }
            />

             <Button
            title='Iniciar sesión'
            onPress={login}
            containerStyle={styles.btnContainer}
            buttonStyle={styles.buttonStyle}
            titleStyle={{color: "black"}}
            />

            <Button
            title='Registrate'
            type="clear"
            onPress={()=> navigation.navigate('CreateAccount')}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 16
    },
    input:{
        paddingHorizontal: 16,
        marginVertical: 8
    },
    label:{
        color: '#000'
    },
    buttonStyle:{
        backgroundColor:'#fcd562',
    }, 
    btnContainer:{
        width: '80%'
    }
});