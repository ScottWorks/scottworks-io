import React from "react"
import "./styles.css"

import { getClassName } from "../utils/index"

const FontColor = {
  BLACK: "black-font",
  BLUE: "blue-font",
}

const FontWeight = {
  NORMAL: "normal-weight",
  BOLD: "bold-weight",
}

export const Title = props => (
  <h1 className={getClassName(props)}>{props.children}</h1>
)

Title.defaultProps = {
  color: FontColor.BLUE,
  weight: FontWeight.BOLD,
}

export const SubTitle = props => (
  <h2 className={getClassName(props)}>{props.children}</h2>
)

SubTitle.defaultProps = {
  defaultStyle: {
    color: FontColor.BLACK,
    weight: FontWeight.NORMAL,
  },
}

export const Body = props => (
  <p className={getClassName(props)}>{props.children}</p>
)

Body.defaultProps = {
  defaultStyle: {
    color: FontColor.BLACK,
    weight: FontWeight.NORMAL,
  },
}
