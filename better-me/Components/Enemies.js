import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Switch, ScrollView, Modal } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import Accordion from "react-native-collapsible/Accordion";


const CONTENT = [
    {
      title: '1. Overthinking',
      content:
        'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
    },
    {
      title: '2. Bad company',
      content:
        'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
    },
    {
      title: '3. Negative thinking',
      content:
        'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
  ];

const Enemies = () => {
    const navigation = useNavigation();
    const [activeSections, setActiveSections] = useState([]);
    const [multipleSelect] = useState(true);
    const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const renderHeader = (section, _, isActive) => {
    return (
     <>
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
      <View style={{flexDirection: "row", marginTop: 0, marginLeft: 10}}> 
       <TouchableOpacity style={[styles.buttonContainer, {marginRight: 10}]}> 
        <Text style= {{fontFamily: "Montserratmedium", color: "#fff"}}> Forget </Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: "#6328f9"}]}>
        <Text style= {{fontFamily: "Montserratmedium", color: "#fff"}}
              onPress={() => setModalVisible(true)}
        > Vanquish </Text>
       </TouchableOpacity>
      </View>
     </>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose = {() =>
            setModalVisible(false) }
      >
        <View style={styles.centeredView}>
         <View style={styles.modalContainer}>
            <Text style={{textAlign: "center", fontFamily: "Calligraffitti", marginTop: 10, fontSize: 20}}> Congratulations! </Text>
            <Text style={{textAlign: "center", fontFamily: "Montserratmedium", marginTop: 10, fontSize: 15}}> You've got 5 XP </Text>
         </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <ScrollView>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Enemies

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 20
      },
      title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
      },
      header: {
        backgroundColor: '#F5FCFF',
        padding: 20,
      },
      headerText: {
        fontSize: 16,
        fontFamily: "MontserratsemiBold"
      },
      content: {
        padding: 20,
        backgroundColor: '#fff',
      },
      active: {
        backgroundColor: 'rgba(255,255,255,1)',
      },
      inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
      },
      selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
      },
      activeSelector: {
        fontWeight: 'bold',
      },
      selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
        textAlign: 'center',
      },
      buttonContainer: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#ff4d38",
        borderRadius: 10,
      },
      customQuestContaner: {
        marginTop: 30,
        paddingVertical: 5,
        backgroundColor: "#4fcc5d",
        borderRadius: 10,
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000099"
      },
      modalContainer: {
        height: 100,
        width: 200,
        backgroundColor: "#FFFFFF",
        borderRadius: 10
      }
})