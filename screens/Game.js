import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native"
import { Audio } from "expo-av"

import mockData from "../mockData"
import { SafeAreaView } from "react-navigation"

const Game = props => {
  const [songName, setSongName] = React.useState("")
  const [songIndex] = React.useState(
    Math.floor(Math.random() * mockData.length)
  )
  const songObject = new Audio.Sound()

  React.useEffect(() => {
    handlePlay()
    return () => songObject.stopAsync()
  }, [])

  const handlePlay = async () => {
    try {
      await songObject.loadAsync(mockData[songIndex].song)
      await songObject.playAsync()
    } catch (error) {
      console.log(error)
    }
  }

  const handleAnswer = async () => {
    if (songName.toLowerCase() === mockData[songIndex].name.toLowerCase()) {
      props.navigation.navigate("Correct")
      mockData.splice(songIndex, 1)
    } else {
      props.navigation.navigate("Wrong")
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Game Screen</Text>
      <Text>High-Score:</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Song"
          value={songName}
          onChangeText={text => setSongName(text)}
          style={styles.input}
        />
        <TextInput placeholder="Artist" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAnswer}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Menu")}
      >
        <Text style={styles.text}>Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center"
  },
  input: {
    width: "100%",
    fontSize: 20,
    borderBottomColor: "#c6c5b9",
    borderBottomWidth: 2,
    padding: 10
  },
  inputWrapper: {
    height: "40%",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c6c5b9",
    borderRadius: 50,
    padding: 20,
    width: "75%",
    backgroundColor: "#62929e",
    marginBottom: 15
  },
  text: {
    color: "#fdfdff"
  }
})

export default Game
