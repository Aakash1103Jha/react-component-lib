import React from "react"
import { Label } from "../components"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Label",
	component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label text="Hello World" {...args} />

export const PrimaryLabel = Template.bind({})

PrimaryLabel.args = {
	type: "error",
	styles: {
		backgroundColor: "skyblue",
		padding: "2rem",
	},
}
