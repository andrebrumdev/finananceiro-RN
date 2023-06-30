import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        alignItems: 'center',
        height: 46
    },
    image:{
        width: 30,
        height: 30
    },
    flashList:{
        width: '100%',
        height: '100%'
    }
});