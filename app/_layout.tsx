import { useFonts } from "expo-font";
import { Stack,Slot} from "expo-router";
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from "@clerk/clerk-expo"
import * as SecureStore from 'expo-secure-store';
import { useEffect,useState } from "react";
import { View,Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import LoginScreen from "@/components/LoginScreen";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  const [FontLoaded, FontError] = useFonts({
    'outfit-M':require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-R':require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-B':require('../assets/fonts/Outfit-Bold.ttf'),
    'Space-Mono':require('../assets/fonts/SpaceMono-Regular.ttf')
    
  })
  const [appReady, setAppReady] = useState(false)
  useEffect(() => {
    if(FontLoaded || FontError){
      setAppReady(true)
    }
  }, [FontError,FontLoaded])
  if(!appReady){
    return <View>
      <Text>Wait</Text>
    </View>
  }
  const tokenCache = {
    async getToken(key: string) {
      try {
        const item = await SecureStore.getItemAsync(key);
        if (item) {
          console.log(`${key} was used 🔐 \n`);
        } else {
          console.log("No values stored under key: " + key);
        }
        return item;
      } catch (error) {
        console.error("SecureStore get item error: ", error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };
  
  return (
   
    
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <SignedIn>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
      </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
      
    </ClerkProvider>
  
  );
}
