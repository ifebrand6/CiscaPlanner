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

// export const deleteProject = (projectID) => {
//     return (dispatch,getState,{getFirestore}) => {
//         const firestore = getFirestore()
//         firestore.collection('projects').doc(projectID).delete()
//         .then(() => {
//             dispatch({type: 'PROJECT_DELETE'})
//         }).catch(()=> {
//             dispatch({type: 'PROJECT_DELETE_ERROR'})
//         })
//     }
// }
// export const deleteProject = (id) => {
//     console.log("dispatch", id) 
//     return(dispatch, getState, {getFirestore}) => {
//         const firestore = getFirestore();
//         firestore.collection('projects').doc(id).delete()
//         .then(() => {
//             console.log('deleted') 
//             dispatch({ type: 'DELETE_PROJECT_SUCCESS' });
//         }).catch(err => {
//             dispatch({ type: 'DELETE_PROJECT_ERROR' });
//         })
//     }
//     }
export const deleteProject = (id) => {
    return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('projects').doc(id).delete().then(() => {
                    console.log('deleted') 
                    dispatch({ type: 'PROJECT_DELETE' });
                }).catch(error => {
                    dispatch({ type: 'PROJECT_DELETE_ERROR', error });
                })
    }
    }
// TODO
// catch the promise rather than using the else condition 5818908681963330f