import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import { RootStackParamList } from './types/RootStack.type';
import { AuthRootStackParamList } from './types/AuthRootStack.type';

const RootNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='AuthRoutes' component={AuthRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function AuthRoutes() {
    const Stack = createNativeStackNavigator<AuthRootStackParamList>();
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default RootNavigator;