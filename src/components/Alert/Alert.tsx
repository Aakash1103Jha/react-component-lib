import React from "react"
import { AlertPropTypes } from "./AlertPropTypes"
import "./Alert.css"

const Alert: React.FC<AlertPropTypes> = ({ message, type = "default", styles }) => {
	return (
		<div className={`container`}>
			<div className={`alert ${type}`} style={styles}>
				{message}
			</div>
		</div>
	)
}

export default Alert
