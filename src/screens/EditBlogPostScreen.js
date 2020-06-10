import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Context as BlogContext } from '../context/BlogContext';

const EditBlogPostScreen = ({ navigation }) => {

    const { state, editBlogPost } = React.useContext(BlogContext);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);

    const [title, setTitle] = React.useState(blogPost.title);
    const [content, setContent] = React.useState(blogPost.content);
    const [loading, setLoading] = React.useState(false)

    const handleSavePost = () => {
        setLoading(true);
        editBlogPost(id, title, content, () => {
            navigation.navigate("Index")
        });
        setLoading(false);
    }

    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <Input 
                value={title} 
                onChangeText={(text) => setTitle(text)} 
                style={styles.input}
                placeholder="Edit Title..."
            />

            <Text style={styles.label}>Content</Text>
            <Input 
                value={content} 
                onChangeText={(text) => setContent(text)} 
                style={styles.input}
                placeholder="Edit Content..."
            />

            <Button 
                style={styles.button}
                title="Save Changes"
                disabled={!title || !content}
                onPress={handleSavePost}
                loading={loading}
            />

        </View>
    )
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


export default EditBlogPostScreen
