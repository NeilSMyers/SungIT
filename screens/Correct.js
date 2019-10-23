import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Correct = props => {
  return (
    <View style={styles.container}>
      <Text>Correct Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Game")}
      >
        <Text>Next!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Play")}
      >
        <Text>Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
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

export default Correct
