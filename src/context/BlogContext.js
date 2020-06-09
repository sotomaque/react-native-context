import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { 
                id: Math.floor(Math.random() * 999999), 
                title: action.payload.title,
                content: action.payload.content
            }]

        case 'EDIT_BLOG_POST':
            return state

        case 'DELETE_BLOG_POST':
            return state.filter((blogPost) => blogPost.id !== action.payload);

        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => { 
        dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
        callback();
    };
}

const deleteBlogPost = (dispatch) => {
    return (id) => { dispatch({ type: 'DELETE_BLOG_POST', payload: id })}
}

export const { Context, Provider } = createDataContext( blogReducer, { addBlogPost, deleteBlogPost }, [] );