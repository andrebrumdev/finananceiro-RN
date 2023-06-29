import { CreateThemeOptions, createTheme,lightColors,darkColors } from '@rneui/themed';
import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();

const themeColor = colorScheme === 'dark'? lightColors:darkColors;

const colors = {
  ...themeColor,
  primary: "#0A2E5E",
  secondary: "#5e3a0a",
}

const theme: CreateThemeOptions = createTheme({
    lightColors: {
      primary: colors.primary,
      secondary: colors.secondary,
    },
    darkColors: {
      primary: colors.primary,
      secondary: colors.secondary,
    },
    mode: colorScheme === 'dark'?'dark':'light',
    components:{
      Input:{
        labelStyle:{
          color: "#fff"
        },
        inputStyle:{
          color: "#fff",
        },
        cursorColor: colors.secondary
      },
      FAB:{
        iconContainerStyle:{
          backgroundColor: colors.grey5
        },
        icon:{
          color: colors.black
        }
      },
      Text:{
        h1Style: {
          fontFamily: 'Inter_700Bold',
          fontWeight: '700',
        },
        h2Style: {
          fontFamily: 'Inter_600SemiBold',
          fontWeight: '600',
        },
        h3Style: {
          fontFamily: 'Inter_600SemiBold',
          fontWeight: '600',
        },
        style:{
          fontFamily: 'Inter_400Regular',
          fontWeight: '400',
        }
      }
    },

});

export default theme;

