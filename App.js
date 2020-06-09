import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as BlogProvider } from './src/context/BlogContext';

import IndexScreen from './src/screens/IndexScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import CreateBlogPostScreen from './src/screens/CreateBlogPostScreen';
import EditBlogPostScreen from './src/screens/EditBlogPostScreen';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Blog: BlogDetailScreen,
    Create: CreateBlogPostScreen,
    Edit: EditBlogPostScreen
  }, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog with Context'
    }
  }
);

const App = createAppContainer(navigator);


export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}