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