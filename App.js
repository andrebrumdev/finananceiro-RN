import { ThemeProvider } from '@rneui/themed';
import RootNavigator from 'config/router';
import theme from 'config/theme';
import * as React from 'react';
import { StatusBar, View } from 'react-native';

export default function App(){

  return (
    <ThemeProvider theme={theme}>
      <RootNavigator/>
      <StatusBar style="auto"/>
    </ThemeProvider>
  );
}
