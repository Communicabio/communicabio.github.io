import React from 'react';
import { HasChildren } from '../../types';
export interface CounterProps extends HasChildren {
    /**
     * Тип счетчика. При использовании компонента в качестве значения свойства `after` у `Button` эти значения игнорируются
     */
    mode?: 'secondary' | 'primary' | 'prominent';
    size?: 's' | 'm';
}
declare const _default: React.NamedExoticComponent<CounterProps>;
export default _default;
