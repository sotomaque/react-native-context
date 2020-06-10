import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost } = React.useContext(BlogContext)

    const handleDelete = (id) => {
        deleteBlogPost(id)
    }

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Blog', { id: item.id })}>
                            <View style={styles.row}>
                                <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.iconContainer}>
                                    <EvilIcons name="trash" style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{ margin: 10 }}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </TouchableOpacity>
        ),
    };
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    icon: {
        fontSize: 40,
        color: 'gray'
    },
    title: {
        fontSize: 30,
        flex: 1,
        textAlign: 'center'
    }
})


export default IndexScreen
