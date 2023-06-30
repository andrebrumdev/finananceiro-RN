import { Text } from '@rneui/themed';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native';
import { OpenFinance } from 'services/openFinance'
import { Participant } from 'types/participant';
import { Image } from 'expo-image';
import styled from './styled';

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
        const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

        return(
            <View style={styled.container} key={bank.id}>
                <Image
                    source={bank?.logo_url ?? "https://picsum.photos/seed/696/3000/2000"}
                    placeholder={blurhash}
                    contentFit="contain"
                    transition={1000}
                    style={styled.image}
                />
                <Text>{bank?.name}</Text>
            </View>
        );
    }

    return ( 
        <FlatList
        data={participants}
        // estimatedItemSize={50}
        renderItem={({item})=>(
            <BankContainer
            bank={item}
            />
        )}
        style={styled.flashList}
        />
    )
}