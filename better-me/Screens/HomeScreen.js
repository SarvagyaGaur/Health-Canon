import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { 
    Calligraffitti_400Regular 
  } from '@expo-google-fonts/calligraffitti';
  import { 
    Montserrat_300Light_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold_Italic,
  } from '@expo-google-fonts/montserrat';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Calligraffitti': Calligraffitti_400Regular,
    'Montserratmedium':  Montserrat_500Medium,
    'MontserratsemiBold': Montserrat_600SemiBold,
  });
  if(!fontsLoaded)
  {
    return null;
  }
  return (
   <> 
    <View> 
     
    </View>
    <View style={styles.screenContainer}>
      <Image source={require('../assets/quests.png')} 
             style={{height: 100, width: 100, marginBottom: 20}}
                />
      <Text style = {{fontFamily: 'Montserratmedium', fontSize: 20}}> What are you on a quest to defeat? </Text>
      <View style={{flexDirection: "row", marginTop: 50}}> 
       <TouchableOpacity style={styles.buttonContainer}
                         onPress={() => navigation.navigate("anxiety")}
       > 
         <Text style= {{fontFamily: "MontserratsemiBold", color: "#fff"}}> Anxiety </Text> 
       </TouchableOpacity>
       <Text style= {{fontSize: 25}}> / </Text>
       <TouchableOpacity style={styles.buttonContainer}>
         <Text style= {{fontFamily: "MontserratsemiBold", color: "#fff"}}
               onPress={() => navigation.navigate("anxiety")}
         > Addiction </Text>
       </TouchableOpacity>
      </View>
    </View>
  </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30
      },
      buttonContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#ff4d38",
        borderRadius: 10,
      }
})