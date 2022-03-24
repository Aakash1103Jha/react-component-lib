import React, { useState } from "react"
import { InputStepperPropTypes } from "./InputStepperPropTypes"
import "./InputStepper.css"

const InputStepper: React.FC<InputStepperPropTypes> = (props) => {
	const [value, setValue] = useState(0)
	const { isDarkMode, border, className, styles } = props

	const onStepUpHandler = () => {
		return setValue(value + 1)
	}
	const onStepDownHandler = () => {
		if (value <= 0) return
		return setValue(value - 1)
	}

	return (
		<div
			className={`stepper_container ${isDarkMode === true ? `dark` : ""} ${
				border === true ? `border` : ""
			} ${className !== undefined ? className : ""} ${styles !== undefined ? styles : ""} `}>
			<button
				className={`stepper_btn ${isDarkMode === true && `dark`}`}
				onClick={onStepDownHandler}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className={`svg  ${isDarkMode === true && `dark`}`}
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
					/>
				</svg>
			</button>
			<span className={`step_val ${isDarkMode === true && `dark`}`}>
				<p>{value}</p>
			</span>
			<button
				className={`stepper_btn ${isDarkMode === true && `dark`}`}
				onClick={onStepUpHandler}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className={`svg ${isDarkMode === true && `dark`}`}
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
					/>
				</svg>
			</button>
		</div>
	)
}

export default InputStepper
