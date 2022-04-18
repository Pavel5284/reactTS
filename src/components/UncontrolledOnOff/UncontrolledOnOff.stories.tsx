import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

/*// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;*/

const callback = action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onClick={callback}/>;
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onClick={callback}/>;
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
export const DefaultInputValue = () => <input defaultValue={"yo"}/>;


/*
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
*/
