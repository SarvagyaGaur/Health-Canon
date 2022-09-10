import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Quests from '../Components/Quests';
import Boosts from '../Components/Boosts';
import PartyMembers from '../Components/PartyMembers';
import Enemies from '../Components/Enemies';
import Achievements from '../Components/Achievements';
import CustomSwitch from '../Components/CustomSwitch';


const AnxietyScreen = () => {

    const [optionsTab, setOptionsTab] = useState(1);
    const onSelectSwitch = (value) => {
      setOptionsTab(value);
    }

  return (
    <>
      <FlatList
        style={{ paddingHorizontal: 20 }}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        data={[1]}
        renderItem={({ }) => optionsTab == 1 ? <Quests /> :
          (optionsTab == 2 ? <Boosts /> :
            (optionsTab == 3 ? <PartyMembers /> : 
             (optionsTab == 4 ? <Enemies /> : <Achievements /> )
             ))
        }
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <FlatList
              horizontal
              data={[1, 2, 3, 4, 5]}
              contentContainerStyle={{
                justifyContent: "space-between",
                width: "100%",
                marginTop: 20,
                marginBottom: 20,
                flexDirection: "row",
              }}
              renderItem={({ }) => <CustomSwitch
                selectionMode={1}
                option1="Quests"
                option2="Boosts"
                option3="  Party Members"
                option4="Enemies"
                option5="Log"
                onSelectSwitch={onSelectSwitch}
              />}
            />
          </View>
        }
      />
      <View style={styles.xpContainer}>
         <Text style={{fontFamily: "Montserratmedium", fontSize: 14}}> XP = 100/1500 </Text>
         <Text style={{fontFamily: "Montserratmedium", fontSize: 14}}> Level 1: Explorer </Text>
      </View>
    </>
  )
}

export default AnxietyScreen;

const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        marginTop: 15,
        flexDirection: "row",
        paddingRight: 22,
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "space-between",
      },
      textInput: {
        fontFamily: "Montserratmedium",
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: 0.001,
        fontWeight: "500",
        flex: 1,
      },
      orderOptionsContainer: {
        borderWidth: 1,
        width: 70,
        height: 27,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
        borderColor: "#8E8E8E",
      },
      optionText: {
        fontWeight: "600",
        fontSize: 10,
        lineHeight: 12,
        color: "#8E8E8E",
        fontStyle: "normal",
        fontFamily: "MontserratRegular",
      },
      customQuestContaner: {
        position: "absolute",
        right: 20,
        bottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#4fcc5d",
        borderRadius: 10,
      },
      xpContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginHorizontal: 20, borderColor: "#000000", 
        borderWidth: 1, 
        borderRadius: 10,
        padding: 10
      }
      
})