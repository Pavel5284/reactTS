import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')}
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
//const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue:"Menu",
    collapsed:true,
    items: []
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbackProps,
    titleValue:"Users",
    collapsed:false,
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},
]
}

export const ModeChanging:ComponentStory<typeof Accordion> = (args) => {
    const[value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>;
}
ModeChanging.args = {
    titleValue:"Users",
items:[
        {title: 'Dimych', value: 1},
{title: 'Valera', value: 2},
{title: 'Artem', value: 3},
{title: 'Viktor', value: 4},
],
onClick: (value) => {
    alert(`user with ID ${value} should by happy`)
}
}

