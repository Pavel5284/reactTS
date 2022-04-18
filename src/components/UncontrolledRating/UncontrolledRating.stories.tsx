import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RatingType, UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";




// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

const callback = action("rating changed inside component")

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>;
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>;
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>;
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>;
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>;
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>;

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
