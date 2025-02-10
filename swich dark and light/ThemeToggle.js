import React, {useContext} from "react";
import { Button, View, Text } from "react-native";
import { ThemeContext } from "./ThemeProvider";


export const ThemeToggle=()=>{
    const {Theme, toggleTheme}= useContext(ThemeContext);
    return (
        <Text>Curent: {Theme}</Text>
        <Button title={"toggle theme"} onPress={toggleTheme}></Button>
    )
}