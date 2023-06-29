import React from "react";
import { Text, View } from "react-native";
import { Props } from "config/types/RootStack.type";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FAB, Input, useTheme } from "@rneui/themed";
import InputPassword from "components/Input/InputPassword";


export default function Login({ navigation }: Props) {
    const { theme } = useTheme();
    return (
        <SafeAreaProvider>
            <View
                style={{
                    backgroundColor: theme.colors.primary,
                    flexGrow: 1,
                    padding: 32,
                    justifyContent: "space-between"
                }}
            >
                <View
                    style={{
                        flex: 1
                    }}
                >
                </View>
                <View
                    style={{
                        paddingHorizontal: 8,
                        alignItems: 'center',
                        flex: 1
                    }}
                >
                    <Input
                        placeholder="Insira o seu email"
                        label="Email"
                        inputMode="email"
                    />
                    <InputPassword />
                    <Text
                        style={{
                            paddingTop: 32,
                            color: "#3163A8",
                            textDecorationLine: 'underline'
                        }}
                    >
                        Esqueci minha senha
                    </Text>
                </View>
                <FAB
                    icon={{
                        name: "check",
                        type: "material",
                        color: theme.colors.black
                    }}
                    iconContainerStyle={{
                        backgroundColor: theme.colors.white
                    }}
                    onPress={() => {
                        navigation.navigate("AuthRoutes");
                    }}
                />
            </View>
        </SafeAreaProvider>
    )
}
