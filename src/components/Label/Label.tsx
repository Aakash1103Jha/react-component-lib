import React from "react"
import { LabelPropTypes } from "./LabelPropTypes"
import "./Label.css"

const Label: React.FC<LabelPropTypes> = (props) => {
	const { text, type, className, styles, isDarkMode = false } = props
	return (
		<label
			className={`label ${type} ${isDarkMode === true && `dark`} ${
				className !== undefined && className
			}`}
			style={styles}>
			{text}
		</label>
	)
}

export default Label
