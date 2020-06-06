import { FunctionComponent, HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l';
    mode?: 'tint' | 'shadow' | 'outline';
}
declare const Card: FunctionComponent<CardProps>;
export default Card;
