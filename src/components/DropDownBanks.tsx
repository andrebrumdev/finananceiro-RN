import { Text } from '@rneui/themed';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { OpenFinance } from 'services/openFinance'
import { Participant } from 'types/participant';

export default function DropDownBanks() {
    const [participants,setParticipantes] = useState([]);
    useEffect(()=>{
        setPromise();
    },[])
    
    useEffect(()=>{
        console.log(participants);
    },[participants])

    async function setPromise(){
        setParticipantes(await new OpenFinance().getParticipants());
    }

    function BankContainer(bank : Participant){

    }

    return ( 
        <View>
            <Text>

            </Text>
        </View>
    )
}
