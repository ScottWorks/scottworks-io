import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const IconSize = {
  LARGE: "lg",
  XSMALL: "xs",
  SMALL: "sm",
  XLARGE: "2x",
  XXLARGE: "3x",
  XXXLARGE: "5x",
  XXXXLARGE: "7x",
  XXXXXLARGE: "10x",
}

const IconColor = {
  BLACK: "black",
  BLUE: "blue",
}

const BaseIcon = props => (
  <FontAwesomeIcon size={IconSize.LARGE} color={IconColor.BLACK} {...props} />
)

export const TwitterIcon = props => <BaseIcon {...props} icon={faTwitter} />
export const LinkedInIcon = props => <BaseIcon {...props} icon={faLinkedin} />
export const MediumIcon = props => <BaseIcon {...props} icon={faMedium} />
export const GithubIcon = props => <BaseIcon {...props} icon={faGithub} />
