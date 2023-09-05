import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useFocusEffect } from '@react-navigation/native';


const FooterMenu = ({ navigation }) => {
    useFocusEffect(React.useCallback(() => {
        console.log("Sef...");
    }))
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         console.log("Sef...");
    //     })
    //     return unsubscribe;
    // }, [navigation])
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <FontAwesome5 name="home" style={styles.iconStyle} />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="plus-square" style={styles.iconStyle} />
                <Text>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="info-circle" style={styles.iconStyle} />
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="user" style={styles.iconStyle} />
                <Text>Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        fontSize: 25,
    },
});

export default FooterMenu;