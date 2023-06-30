import { useNavigationState } from '@react-navigation/native';
import { useEffect, useState } from 'react'
import * as LocalAuthetication from 'expo-local-authentication';

const routesGuard = ["Home"];
const TIME_OUT = 30;


export function useScreenGuard() {
  const [sessionTime, setSessionTime] = useState<number>(0);
  const navigationState = useNavigationState(state => state);

  useEffect(() => {
    const currentScreen = navigationState.routes[navigationState.index];
    const currentScreenName: string = currentScreen.name as string;
    if (routesGuard.includes(currentScreenName)) {
      if (sessionTime < TIME_OUT) {
        const timer = setTimeout(() => {
          setSessionTime(sessionTime + 1);
        }, 1000)
        return () => clearTimeout(timer);
      }
      else {
        console.log("--IN SECURIT VIEW--")
        handleAutheticate();
      }
    }
  }, [sessionTime])

  async function handleAutheticate() {
    const auth = await LocalAuthetication.authenticateAsync({
      promptMessage: 'Sessão Expirada'
    });

    if (auth.success) {
      setSessionTime(0);
    }
    else {
      handleAutheticate();
    }
  }
}
