import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Context as BlogContext } from '../context/BlogContext';


const CreateBlogPostScreen = ({ navigation }) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const [loading, setLoading] = React.useState(false)

    const { addBlogPost } = React.useContext(BlogContext)

    const handleAddPost = () => {
        setLoading(true)
        addBlogPost(title, content, () => {
            navigation.navigate("Index")
        });
        setLoading(false)
    }

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <Input 
                value={title} 
                onChangeText={(text) => setTitle(text)} 
                style={styles.input}
                placeholder="Title..."
            />
            
            <Text style={styles.label}>Enter Content:</Text>
            <Input 
                value={content} 
                onChangeText={(text) => setContent(text)} 
                style={styles.input}
                placeholder="Content..."
            />

            <Button 
                style={styles.button}
                title="Add Blog Post"
                disabled={!title || !content}
                onPress={handleAddPost}
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


export default CreateBlogPostScreen
