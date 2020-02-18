const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}
const projectReducer = (state=initState,action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATED_PROJECT_ERROR':
            console.log('created project', action.err)
            return state;
        case 'UPDATED_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'UPDATED_PROJECT_ERROR':
            console.log('created project', action.err)
        return state;
        case 'GET_PROJECT':
            console.log('fetch a single project', action.project)
            return state;
        case 'PROJECT_DELETE_ERROR':
            console.log('application encouter an error deleting record', action.error.message)
            return state;
        case 'PROJECT_DELETE':
            console.log('project deleted',action.project)
            return state;

            default:
            return state;
    } 
}
export default projectReducer;