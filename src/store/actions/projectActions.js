export const createProject = (project) => {
    return (dispatch,getState,{getFirebase, getFirestore}) =>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Net',
            authorLasttname: 'Ninja',
            authorId: 1232,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATED_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATED_PROJECT_ERROR', err});
        })
    }
}