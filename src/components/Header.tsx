import { Avatar, Badge, FAB, Input, useTheme } from "@rneui/themed";
import React from 'react'
import { View } from 'react-native'

export default function Header() {
    const { theme } = useTheme();
    const indexPhoto = Math.round(Math.random()*90)
    return (
        <View
            style={{
                justifyContent: "space-between",
                flexDirection: "row",
            }}
        >
            <FAB
                icon={{
                    name: "menu",
                }}
                iconContainerStyle={{
                    backgroundColor: theme.colors.primary
                }}
            />
            <View
            style={{
                flexDirection: "row",
                gap: 8,
            }}
            >
                <FAB
                    icon={{
                        name: "search",
                        type: "feather"
                    }}
                />
                <View >
                    <FAB
                        style={{
                            position: "relative"
                        }}
                        icon={{
                            name: "bell",
                            type: "entypo",
                        }}
                        
                    />
                    <Badge
                        status="error"
                        containerStyle={{ position: 'absolute', top: 16, right: 22 }}
                    />
                </View>
                <Avatar
                size={56}
                rounded
                source={{ uri:`https://randomuser.me/api/portraits/men/${indexPhoto}.jpg` }}
                />
            </View>
        </View>
    )
}
