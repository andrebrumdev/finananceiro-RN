import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  } from "@expo-google-fonts/inter";

const StyledText = ({ children, style, ...props}:any) => {
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
      });
    
      if (!fontsLoaded) {
        return <></>;
      }
    if(!fontsLoaded) return null;
    return <Text style={[style,styles.text]} {...props}>
        {children}
    </Text>
}

const styles = StyleSheet.create({
    text:{
        fontFamily: "Inter_400Regular",
    }
});


export default StyledText;