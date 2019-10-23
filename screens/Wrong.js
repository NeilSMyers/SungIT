import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Wrong = props => {
  return (
    <View>
      <Text>Wrong Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Menu")}
      >
        <Text style={styles.text}>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c6c5b9",
    borderRadius: 50,
    padding: 20,
    width: "75%",
    backgroundColor: "#62929e"
  }
})

export default Wrong
