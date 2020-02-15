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
                authError: action.error.message
                // authError: action.err.message
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
          case 'SIGN_ERROR':
                    console.log('signup error')
                    return {
                        ...state,
                        authError: action.error.message
                    }
            case 'SIGNUP_SUCCESS':
                console.log('sign up success')
                return {
                    ...state,
                    authStatus: 'User profile created success'
                }
                case 'PROFILE_UPDATE_SUCCESS':
                    return {
                        ...state
                    }
                case 'PROFILE_UPDATE_FAILED':
                    return{
                        ...state,
                        authError: action.error.message
                    }
    
        default:
            return state;
    }
}
export default authReducer; 