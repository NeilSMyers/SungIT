import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-navigation"

const Menu = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.intro}>
        <Text style={styles.title}>SungIT</Text>
        <Text style={styles.text}>Hear it, Guess it, Go again</Text>
        <Text style={styles.text}>How many can you get in a row?</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Game")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#393d3f"
  },
  title: {
    fontSize: 50,
    color: "#fdfdff"
  },
  intro: {
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c6c5b9",
    borderRadius: 50,
    padding: 20,
    width: "75%",
    backgroundColor: "#62929e"
  },
  buttonText: {
    fontSize: 30,
    color: "#fdfdff"
  },
  text: {
    color: "#fdfdff"
  }
})

export default Menu
