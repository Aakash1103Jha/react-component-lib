import React from "react"
import { Card } from "../components"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
	title: "Card",
	component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
	text: "Card",
}
