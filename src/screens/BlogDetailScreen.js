import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';

const BlogDetailScreen = ({ navigation }) => {

    const { state } = React.useContext(BlogContext);
    
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = React.useState(blogPost.title);
    const [content, setContent] = React.useState(blogPost.content);
    
    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <Input 
                value={title} 
                onChangeText={(text) => setTitle(text)} 
                style={styles.input}
                disabled
            />

            <Text style={styles.label}>Content</Text>
            <Input 
                value={content} 
                onChangeText={(text) => setContent(text)} 
                style={styles.input}
                disabled
            />

        </View>
    )
}

BlogDetailScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })} style={{ margin: 10 }}>
            <Feather name="edit-2" size={24} color="black" />
          </TouchableOpacity>
        ),
    };
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        paddingLeft: 5,
        height: 40
    },
    label: {
        fontSize: 20,
        margin: 10
    },
    button: {
        borderRadius: 4,
        marginVertical: 50,
        marginHorizontal: 15
    }
})


export default BlogDetailScreen
