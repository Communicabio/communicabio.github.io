export interface ObjectClassNames {
    [index: string]: boolean;
}
export declare type ClassName = number | string | ObjectClassNames | false | null | undefined;
export default function classNames(...classnames: ClassName[]): string;
