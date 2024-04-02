import instance from "./axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const value = await AsyncStorage.getItem('token');


instance.interceptors.request.use(
    (confg)=>{
        confg.headers={
            Authorization: `Bearer ${value}`,
            "Content-Type": "application/json"
        }

        return confg;
    },(error) => {
        return Promise.reject(error);
    }
)

export default {

    async doPost(url, data) {
        return await instance.post(url, data);
    },
    async deDelete(url) {
        return await instance.delete(url);
    },
    async doPut(url,data) {
        return await instance.put(url,data);
    },
    async doGet(url) {
        return await instance.get(url);
    },

}