const initState = {
    authError: null,
    authStatus: null

}
const authReducer = (state = initState,action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'login failed'
            }
             case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            } 
            case 'SIGNOUT_SUCCESS':
                console.log('singout successfully')
                return {
                    ...state
                }
            case 'SIGNUP_SUCCESS':
                console.log('sign up success')
                return {
                    ...state,
                    authStatus: 'User profile created success'
                }
                case 'SIGNUP_ERROR':
                    console.log('signup error')
                    return {
                        ...state,
                        authError: action.err.message
                    }
    
        default:
            return state;
    }
}
export default authReducer; 