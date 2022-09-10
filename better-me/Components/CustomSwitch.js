import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
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


export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    option3,
    option4,
    option5,
    onSelectSwitch
}) {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }
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
        <View style={styles.contentContainerStyle}>

            <TouchableOpacity style={{
                width: 70,
                height: 27,
                alignItems: "center",
                justifyContent: "center",
            }}
                onPress={() => updateSwitchData(1)}
            >
                <Text style={{
                    width: 52,
                    height: 0,
                    borderWidth: 1,
                    borderColor: getSelectionMode == 1  ? "#4fcc5d" : "#FFFFFF",
                    top: 0,
                    position: "absolute"
                }}> </Text>
                <Text style={{
                    fontSize: 13,
                    color: getSelectionMode == 1 ? "#4fcc5d" : "#A8A8A8",
                    fontFamily: "MontserratsemiBold",
                    position: "absolute"
                }}> {option1} </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 70,
                height: 27,
                alignItems: "center",
                justifyContent: "center",
            }}
                onPress={() => updateSwitchData(2)}
            >
                <Text style={{
                    width: 52,
                    height: 0,
                    borderWidth: 1,
                    borderColor: getSelectionMode == 2 ? "#6328f9" : "#FFFFFF",
                    top: 0,
                    position: "absolute"
                }}> </Text>
                <Text style={{
                    fontSize: 13,
                    color: getSelectionMode == 2 ? "#6328f9" : "#A8A8A8",
                    fontFamily: "MontserratsemiBold",
                    position: "absolute"
                }}> {option2} </Text>
                <View style={{ left: 22, top: 25, position: "absolute" }}>
                    {getSelectionMode == 2 ? null : null}
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 70,
                height: 27,
                alignItems: "center",
                justifyContent: "center",
            }}
                onPress={() => updateSwitchData(3)}
            >
                <Text style={{
                    width: 52,
                    height: 0,
                    borderWidth: 1,
                    borderColor: getSelectionMode == 3 ? "#bdbe41" : "#FFFFFF",
                    top: 0,
                    position: "absolute"
                }}> </Text>
                <Text style={{
                    fontSize: 12,
                    color: getSelectionMode == 3 ? "#bdbe41" : "#A8A8A8",
                    fontFamily: "MontserratsemiBold",
                    position: "absolute",
                    top: 4,
                    right: 1
                }}> {option3} </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 70,
                height: 27,
                alignItems: "center",
                justifyContent: "center",
            }}
                onPress={() => updateSwitchData(4)}
            >
                <Text style={{
                    width: 52,
                    height: 0,
                    borderWidth: 1,
                    borderColor: getSelectionMode == 4 ? "#ff4d38" : "#FFFFFF",
                    top: 0,
                    position: "absolute"
                }}> </Text>
                <Text style={{
                    fontSize: 12,
                    color: getSelectionMode == 4 ? "#ff4d38" : "#A8A8A8",
                    position: "absolute",
                    fontFamily: "MontserratsemiBold",
                }}> {option4} </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{
                width: 70,
                height: 27,
                alignItems: "center",
                justifyContent: "center",
            }}
                onPress={() => updateSwitchData(5)}
            >
                <Text style={{
                    width: 52,
                    height: 0,
                    borderWidth: 1,
                    borderColor: getSelectionMode == 5 ? "#000000" : "#FFFFFF",
                    top: 0,
                    position: "absolute"
                }}> </Text>
                <Text style={{
                    fontSize: 13,
                    color: getSelectionMode == 5 ? "#000000" : "#A8A8A8",
                    fontStyle: "normal",
                    fontFamily: "MontserratsemiBold",
                    position: "absolute",
                    top: 5,
                }}> {option5} </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
        flexDirection: "row",
    },
})