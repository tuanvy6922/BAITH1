import React from "react";
import {
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";

export default() => {
    return (
        <View style={MyStyle.container}>
            <Button title = "Button 1" onPress ={()=> alert("hello 1")} />
            <TouchableOpacity style={MyStyle.Button} onPress={()=> alert("hello 2")}>
                <Text style={MyStyle.text}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const MyStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center"
        },
        Button:{
            backgroundColor: "purple",
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 120       
        },
        text:{
            color: "white",
            fontSize: 18
        }
    }
)