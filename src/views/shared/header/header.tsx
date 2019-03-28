import * as React from "react"
import { View, ViewStyle, TextStyle, Dimensions } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button"
import { Text } from "../text"
import { spacing } from "../../../theme"
import { translate } from "../../../i18n/"
import Icon from 'react-native-vector-icons/FontAwesome'


const { height } = Dimensions.get('window')
// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export class Header extends React.Component<HeaderProps, {}> {
  render() {
    const {
      onLeftPress,
      onRightPress,
      rightIcon,
      leftIcon,
      headerText,
      headerTx,
      titleStyle,
    } = this.props
    const header = headerText || (headerTx && translate(headerTx)) || ""

    return (
      <View style={{ ...ROOT, ...this.props.style, height: height / 8 }}>
        {leftIcon ? (
          <Button preset="link" onPress={onLeftPress} >
            <Icon name={leftIcon} size={20} color="white"  />
          </Button>
        ) : (
          <View style={LEFT} />
        )}
        <View style={TITLE_MIDDLE}>
          <Text style={{...TITLE, ...titleStyle}} text={header} />
        </View>
        {rightIcon ? (
          <Button preset="link" onPress={onRightPress}>
            <Icon name={rightIcon} />
          </Button>
        ) : (
          <View style={RIGHT} />
        )}
      </View>
    )
  }
}