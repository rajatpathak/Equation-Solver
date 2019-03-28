import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../text"
import { viewPresets, textPresets } from "./equation-input.presets"
import { EquationInputProps } from "./equation-input.props"

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function EquationInput(props: EquationInputProps) {
  // grab the props
  const { preset = "primary", tx, text, style: styleOverride, ...rest } = props

  // assemble the style
  const viewPresetToUse = viewPresets[preset] || viewPresets.primary
  const textPresetToUse = textPresets[preset] || textPresets.primary

  const viewStyle = { ...viewPresetToUse, ...styleOverride }
  const textStyle = textPresetToUse

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      <Text tx={tx} text={text} style={textStyle} />
    </TouchableOpacity>
  )
}
