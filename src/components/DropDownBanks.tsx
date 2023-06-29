import { Image, Text } from '@rneui/themed';
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { OpenFinance } from 'services/openFinance'
import { Participant } from 'types/participant';

export default function DropDownBanks() {
    const [participants,setParticipantes] = useState<Participant[]>([]);
    useEffect(()=>{
        if(participants.length===0)
        setPromise();
    },[])

    async function setPromise(){
        setParticipantes(await new OpenFinance().getParticipants());
    }

    const BankContainer: React.FC<{bank:Participant}> = ({bank}) => {
        console.log(bank);

        return(
            <View>
                <Image
                source={{uri:bank?.logo_url}}
                containerStyle={styles.item}
                />
                <Text>{bank?.name}</Text>
            </View>
        );
    }

    return ( 
        <FlatList
        data={participants}
        renderItem={({item})=>(
            <BankContainer
            bank={item}
            />
        )}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,
    },
});