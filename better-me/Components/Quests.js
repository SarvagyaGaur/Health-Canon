import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Switch, ScrollView, Modal } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import Accordion from "react-native-collapsible/Accordion";


const CONTENT = [
    {
      title: '1. Stuck to a physical routine for 3 days',
      content:
        'Exercise improves mental health by reducing anxiety, depression, and negative mood and by improving self-esteem and cognitive function. These improvements in mood are proposed to be caused by exercise-induced increase in blood circulation to the brain and by an influence on the hypothalamic-pituitary-adrenal (HPA) axis and, thus, on the physiologic reactivity to stress.',
    },
    {
      title: '2. Slept on time for a week',
      content:
        'Individuals who wake up early have more positive thoughts compared to night owls. They’re found to be more optimistic, agreeable, conscientious, and satisfied with life. When you sleep the recommended 7 to 9 hours, your body and mind have enough time to restore themselves, resulting in a healthier body and mind.',
    },
    {
      title: '3. Feed your local stray dogs',
      content:
      ' Want the benefits of an animal companion without owning a pet? Yes, it’s possible! When you need a break, find photos or videos online of animals and their crazy antics or just being adorable, or just step out to feed the local stray dogs.'
    },
  ];

const Quests = () => {
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
        <Text style= {{fontFamily: "Montserratmedium", color: "#fff"}}> Abandon </Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: "#6328f9"}]}>
        <Text style= {{fontFamily: "Montserratmedium", color: "#fff"}}
              onPress={() => setModalVisible(true)}
        > Finished </Text>
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
            <Text style={{textAlign: "center", fontFamily: "Montserratmedium", marginTop: 10, fontSize: 15}}> You've got 10 XP </Text>
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
      <TouchableOpacity style={styles.customQuestContaner}>
        <Text style= {{fontFamily: "MontserratsemiBold", color: "#fff", textAlign: "center"}}> Add custom quest </Text> 
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Quests

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