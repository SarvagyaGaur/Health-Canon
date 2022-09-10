import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const PartyMembers = () => {
    const [details, setDetails] = useState();
    const [name, setName] = useState([])
    const handleAddDetails = () => {
        setName(...name, details)
        setDetails(null)
    }
  return (
    <> 
      <Text style={{fontFamily: "Montserratmedium", fontSize: 14}}> Name of party member: </Text>
      <TextInput style={styles.input} value = {details} onChangeText = {text => setDetails(details)}/>
      <Text style={{fontFamily: "Montserratmedium", fontSize: 14}}> Their contact number: </Text>
      <TextInput style={styles.input}/>
      <TouchableOpacity style={styles.addContaner}
                        onPress={() => handleAddDetails()}
      >
        <Text style= {{fontFamily: "MontserratsemiBold", color: "#fff", textAlign: "center"}}> Add party member </Text> 
      </TouchableOpacity>
      <View>
        
      </View>
    </>
  )
}

export default PartyMembers

const styles = StyleSheet.create({
    input: {
        width: "90%",
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#bdbe41"
    },
    addContaner: {
        marginTop: 30,
        paddingVertical: 5,
        backgroundColor: "#bdbe41",
        borderRadius: 10,
    }
})