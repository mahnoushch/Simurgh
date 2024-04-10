import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { TweetType } from '../types';
import { Entypo, EvilIcons, } from '@expo/vector-icons';
import IconButton from './IconButton';
import { Link } from 'expo-router';



type TweetProps = {
    tweet: TweetType;
}

const Tweet = ({ tweet }: TweetProps) => {


    return (
        <Link href={`/feed/posts/${tweet.id}`} asChild>
            <Pressable style={styles.container}>

                <Image source={{ uri: tweet.user.image }} style={styles.userImage} />

                <View style={styles.mainContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.name}>@{tweet.user.name}</Text>
                        <Text style={styles.username}>{tweet.user.username}·2h</Text>
                        <Entypo name="dots-three-horizontal"
                            size={16}
                            color="gray"
                            style={{ marginLeft: 'auto' }}
                        />
                    </View>
                    <Text style={styles.content}>{tweet.content}</Text>

                    <View style={styles.footer}>
                        <IconButton icon="comment" text={tweet.numberOfComments} />
                        <IconButton icon="share-google" text={tweet.numberOfRetweets} />
                        <IconButton icon="heart" text={tweet.numberOfLikes} />
                        <IconButton icon="share-apple" />
                    </View>



                    {tweet.image && <Image source={{ uri: tweet.user.image }} style={styles.image} />}

                </View>

            </Pressable>
        </Link>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgray',
        backgroundColor: 'white'

    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50

    },
    mainContainer: {
        marginLeft: 10,
        flex: 1,
    },
    name: {
        fontWeight: '600'
    },

    username: {
        color: 'gray',
        marginLeft: 5,
    },

    content: {
        lineHeight: 20,
        marginTop: 5,
    },

    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 10,
        borderRadius: 15,
    },

    // footer
    footer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
    },

});


export default Tweet;