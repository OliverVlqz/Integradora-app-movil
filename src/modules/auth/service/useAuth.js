import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./service/serviceAuth";
import { authReducer } from "./authReducer";
import { useReducer } from "react";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth:false,
    isAdmin:false,
    user:undefined
  }

export const useAuth = () => {
    const [login,dispatch] = useReducer(authReducer, initialLogin);
    const navigate = useNavigate();
    

    const handlerLogin = async(username,password) =>{
        try {
            const response = await loginUser({username,password});
            const token = response.data.token;
            const claims =JSON.parse(window.atob(token.split(".")[1]));
            console.log(claims);
            const user = {username: claims.sub}//claims.sub es el rol
            dispatch({
                type:'login',
                payload:{
                    user,
                    isAdmin:claims.authorities
                }
              })

              sessionStorage.setItem('login',JSON.stringify({
                isAuth:true,
                isAdmin:claims.authorities,
                user
              }))

            sessionStorage.setItem('token',`Bearer ${token}`)
            navigate('/inicio');

        } catch (error) {
            if(error.response?.status===401){
                Swal.fire({
                    background:'#E1E1E1',
                    title:"Credenciales Incorrectas",
                    text:"Usuario y Password Incorrectos, Intentalo de nuevo",
                    icon:"error",
                    confirmButtonText:'Aceptar'
                })
            }else{
                Swal.fire({
                    background:'#E1E1E1',
                    title:"Error Desconocido",
                    text:"Comunicate con Soporte",
                    icon:"warning",
                    confirmButtonText:'Aceptar'
                })
            }
        }
    }

    
    
    const handlerlogout=()=>{
        dispatch({
            type:'logout'
        });
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('login')
        sessionStorage.clear()
}

    return{
        login,
        handlerLogin,
        handlerlogout
    
    
    }




}
