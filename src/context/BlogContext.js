import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { title: `Blog post #${state.length + 1}`}]

        case 'EDIT_BLOG_POST':
            return state

        case 'DELETE_BLOG_POST':
            return state

        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return () => { dispatch({ type: 'ADD_BLOG_POST'}) };
}

export const { Context, Provider } = createDataContext( blogReducer, { addBlogPost }, [] );