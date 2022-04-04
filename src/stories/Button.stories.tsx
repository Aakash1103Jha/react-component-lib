import React from "react"
import { Button } from "../components"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: "Button",
}
