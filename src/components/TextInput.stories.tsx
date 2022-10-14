import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react';

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="johndoe@example.com" />
        ]
    }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="johndoe@example.com" />
    }
};