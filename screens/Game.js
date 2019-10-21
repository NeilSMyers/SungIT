import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native"
import { Audio } from "expo-av"

import mockData from "../mockData"

const Game = props => {
  const [songName, setSongName] = React.useState("")
  const [song, setSong] = React.useState(
    Math.floor(Math.random() * mockData.length)
  )
  const soundObject = new Audio.Sound()

  React.useEffect(() => {
    handlePlay()
    return () => soundObject.stopAsync()
  }, [])

  const handlePlay = async () => {
    try {
      await soundObject.loadAsync(mockData[song].song)
      await soundObject.playAsync()
    } catch (error) {
      console.log(error)
    }
  }

  const handleAnswer = async () => {
    if (songName === mockData[song].name) {
      Alert.alert("Correct!", "Are You Awesome?", [
        { text: "Ya, I'm awesome", onPress: handlePlay }
      ])
    }
  }

  return (
    <View>
      <Text>High-Score:</Text>
      <Text>Game Screen</Text>
      <TextInput
        placeholder="Song"
        value={songName}
        onChangeText={text => setSongName(text)}
      />
      <TextInput placeholder="Artist" />
      <TouchableOpacity onPress={handleAnswer}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Game
