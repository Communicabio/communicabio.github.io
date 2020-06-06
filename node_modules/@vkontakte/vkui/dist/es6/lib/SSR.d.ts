import React from 'react';
import { OSType } from './platform';
import { HasChildren } from '../types';
export interface SSRContextInterface {
    platform: OSType;
}
export declare const SSRContext: React.Context<SSRContextInterface>;
export interface SSRWrapperProps extends HasChildren {
    userAgent?: string;
}
export declare const SSRWrapper: React.FunctionComponent<SSRWrapperProps>;
