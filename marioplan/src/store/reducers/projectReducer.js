const initState = {
    projects: [
        {id: '1', title: 'project 1 ya', content: 'na na nan na'},
        {id: '2', title: 'project 2 ya', content: 'na na nan na'},
        {id: '3', title: 'project 3 ya', content: 'na na nan na'}
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
    }
    return state
}
export default projectReducer