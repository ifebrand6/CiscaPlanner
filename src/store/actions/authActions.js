import firebase from 'firebase'
export const signIn = (credentials) => {
    return (dispatch, getState) => {
       // const firebase = getFirebase();
        
        firebase.auth().signInWithEmailAndPassword(
        credentials.email.trim(),
        credentials.password
        ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', error });
        });
    
    }
    }
export const signOut = () =>{
    return (dispatch,getState) =>{
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        });
    }
}
export const signUp = (newUser) => {
    return (dispatch,getState,{getFirestore}) => {
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password    
        ).then((resp)=> {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((error)  => {
            dispatch({type: 'SIGNUP_ERROR'}, error)
            })
    }

}
export const updateProfile = (userProfile) => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().updateCurrentUser(userProfile).then
        (()=> {
            dispatch({type: 'PROFILE_UPDATE_SUCCESS'})
        }).catch((error) =>{
            dispatch({type: 'PROFILE_UPDATE_FAILED'})
        })
    }
}