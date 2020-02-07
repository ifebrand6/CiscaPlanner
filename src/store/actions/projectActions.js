export const createProject = (project) => {
    return (dispatch,getState,{getFirestore}) =>{
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstname: profile.firstName,
            authorLasttname: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATED_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATED_PROJECT_ERROR', err});
        })
    }
}
export const updateProject = (project) =>{
    return (dispatch,getState,{getFirestore}) =>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').doc().update({
            ...project
        }).then(() =>{
            dispatch({type: 'UPDATED_PROJECT', project});
        }).catch((error) => {
            dispatch({type: 'UPDATED_PROJECT_ERROR'})
        })
    }
}
export const getAProject = (projectId) => {
    return (dispatch,getState,{getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc(projectId).get()
        .then((doc) =>{
            if(doc.exists){
                const data = doc.data()
                dispatch({type: 'GET_PROJECT', data})
            }else{
                console.log('does not exist')
            }
        })
    }
}

// TODO
// catch the promise rather than using the else condition