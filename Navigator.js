import { createAppContainer, createSwitchNavigator } from "react-navigation"

import Menu from "./screens/Menu"
import Game from "./screens/Game"
import Correct from "./screens/Correct"
import Wrong from "./screens/Wrong"

const Navigator = createSwitchNavigator({
  Menu,
  Game,
  Correct,
  Wrong
})

export default createAppContainer(Navigator)
