import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import {ActivityIndicator} from "react-native-paper";

const Loading = (props) => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#f21d1d"/>
    </View>
    )
export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});