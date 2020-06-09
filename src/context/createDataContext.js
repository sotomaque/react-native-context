import React from 'react';

/**
 * 
 * @param {FUNCTION} reducer 
 *  -> reducer to be used with this newly created context
 *  -> i.e. blogReducer = (state, action) => { switch(action.type) { ... } }
 * 
 * @param {ARRAY} actions 
 *  -> actions to be provided via the provider for this newly created context 
 *  -> each action must take in dispatch and return a function that calls dispatch
 *  -> i.e. actions = { addBlogPost }
 *      where addBlogPost = (dispatch) => { return () => { dispatch({ type: 'E.G.' }) } }
 * 
 * @param {*} initialState 
 *  -> second parameter for React.useReducer, i.e. [], {}, '', etc.
 * 
 * @returns { Context, Provider }
 */
export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = React.useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    }

    return { Context, Provider };
}