import { ElementType, FunctionComponent, LinkHTMLAttributes } from 'react';
import { HasRootRef } from '../../types';
export interface LinkProps extends LinkHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
    Component?: ElementType;
}
declare const Link: FunctionComponent<LinkProps>;
export default Link;
