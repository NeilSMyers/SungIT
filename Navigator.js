import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Play from "./screens/Play"
import Game from "./screens/Game"
import Correct from "./screens/Correct"
import Wrong from "./screens/Wrong"

const Navigator = createStackNavigator({
  Play,
  Game,
  Correct,
  Wrong
})

export default createAppContainer(Navigator)
