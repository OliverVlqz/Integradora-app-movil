
export const authReducer = (state = {},action) => {
    switch(action.type){
        case'login':
            return {
                isAuth:true,
                isAdmin:action.payload.isAdmin,
                user:action.payload.user
            };
            case 'logout':
                return {
                    isAuth:false,
                    isAdmin:undefined,
                    user:undefined
                    
                }

        
        default:
            return state;
    }

}
