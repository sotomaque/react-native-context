import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const blogPost = [
        { title: 'first post' },
        { title: 'second post' },
    ]
    return (
        <BlogContext.Provider value={blogPost}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;