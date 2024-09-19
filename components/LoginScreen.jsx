import { Image, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";


export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }, []);
  };
WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View>
        <View style={styles.imageVIew}> 
            <Image source={require('../assets/images/2.png')} style={styles.imageStyle} />
        </View>
      
        <View style={{backgroundColor:'#fff',padding:20,marginTop:-120}}>
            <Text style={{fontSize:30 ,textAlign:'center',fontFamily:'outfit-M'}}>Your Ultimate <Text style={{color:Colors.PRIMARY,fontFamily:'outfit-B'}}>Community Bussiness Directory</Text> APP</Text>
            <Text style={{fontSize:15,fontFamily:'outfit-R',marginVertical:15,color:Colors.GRAY,textAlign:'center'}}>Find Something that are relevent to your busniess.Connect with us and explore the oppertunity</Text>
            <TouchableOpacity onPress={onPress} style={styles.btn}>
                <Text style={{textAlign:'center',color:'white',fontFamily:'outfit-B'}}>Let's get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
} 

export default LoginScreen

const styles = StyleSheet.create({
    imageStyle:{
        width:220,
        height:550,
        borderRadius:20,
        borderColor:'#000'
    },
    imageVIew:{
        display:'flex',
        alignItems:'center',
        marginTop:50,
    },
    btn:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        borderRadius:90,
    }
})