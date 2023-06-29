import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'

export default function Section({title="",children}:any){
  return (
    <View>
        <StyledText h2>{title}</StyledText>
        {children}
    </View>
  )
}
