import { useTheme } from '@rneui/themed';
import DropDownBanks from 'components/DropDownBanks/DropDownBanks';
import Header from 'components/Header'
import Section from 'components/Section';
import StyledText from 'components/StyledText';
import { useScreenGuard } from 'hooks/useScreenGuard';
import React from 'react'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const BankSection: typeof Section = Section;

export default function Home() {
  const { theme } = useTheme();
  // useScreenGuard();

  return (
    <SafeAreaProvider>
      <View
        style={{
          flexGrow: 1,
          padding: 16,
          backgroundColor: theme.colors.background,
          gap: 8
        }}
      >
        <Header />
        <StyledText h1>Dashboard</StyledText>
        <BankSection title="Bancos">
          <DropDownBanks />
        </BankSection>
      </View>
    </SafeAreaProvider>
  )
}