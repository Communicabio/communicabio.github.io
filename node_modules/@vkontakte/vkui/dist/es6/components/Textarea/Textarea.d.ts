import { ChangeEventHandler, PureComponent, TextareaHTMLAttributes } from 'react';
import { HasFormLabels, HasFormStatus, HasRef, HasRootRef, OldRef } from '../../types';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, HasRef<HTMLTextAreaElement>, HasRootRef<HTMLElement>, HasFormStatus, HasFormLabels {
    grow?: boolean;
    onResize?(el: HTMLTextAreaElement): void;
    defaultValue?: string;
}
export interface TextareaState {
    value?: string;
    height?: number;
}
export default class Textarea extends PureComponent<TextareaProps, TextareaState> {
    constructor(props: TextareaProps);
    isControlledOutside?: boolean;
    element: HTMLTextAreaElement;
    componentDidMount(): void;
    static defaultProps: TextareaProps;
    getRef: OldRef<HTMLTextAreaElement>;
    resize: VoidFunction;
    get value(): string | number | string[];
    onChange: ChangeEventHandler;
    componentDidUpdate(prevProps: TextareaProps): void;
    render(): JSX.Element;
}
