import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    SafeAreaView
} from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const AppBar = (props) => (
    <SafeAreaView style={{height: 150, width: width, justifyContent: "center", alignItems: "center"}}>
        <Image source={require("../assets/CMCLogoBlack.png")}/>
    </SafeAreaView>
    )
export default AppBar;
