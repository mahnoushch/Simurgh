import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import {
    View,
    StyleSheet, Text, Image, TextInput,
    Pressable, SafeAreaView
} from 'react-native';

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
        'https://www.cyruscrafts.com/img/cms/blog/simurgh-or-phoenix-bird/simurgh-and-zaal.jpg',
};

export default function NewPost() {
    const [text, setText] = useState('');
    const router = useRouter();

    const onPostPress = () => {
        console.warn('Posting the new post', text);

        setText('');
        router.back();
    };
    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <View style={styles.buttonCantainer}>
                    <Link href="../" style={{ fontSize: 20 }}>
                        Cancle
                    </Link>
                    <Pressable onPress={onPostPress} style={styles.button}>
                        <Text style={styles.buttonText}>New</Text>
                    </Pressable>
                </View>
                <View style={styles.inputCotainer}>
                    <Image source={{ uri: user.image }} style={styles.image} />
                    <TextInput
                        value={text}
                        onChangeText={setText}
                        placeholder="What's happening?" multiline style={{ flex: 1 }} />
                </View>

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: 'white',
        flex: 1,

    },
    buttonCantainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    button: {
        backgroundColor: '#663399',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    inputCotainer: {
        flexDirection: 'row',

    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    }

});
