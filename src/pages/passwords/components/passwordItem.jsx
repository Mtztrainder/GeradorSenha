import { useState, React } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export function PasswordItem({ data, removePassword}){
    const [visible, setVisible] = useState(false)


    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={visible ? styles.text : styles.textOff}>
                {visible && data}
            </Text>

            <Ionicons size={20} color={"#FFF"} name={visible ? "eye-off-outline" : "eye-outline"} onPress={() => setVisible(!visible)}/>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    text: {
        color: "#FFF",
    },
    textOff: {
        backgroundColor: "#FFF",
        paddingLeft: 150,
        borderRadius: 8,
        height: 10,
    }
})