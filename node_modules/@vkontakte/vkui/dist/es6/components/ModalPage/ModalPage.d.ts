import { Component, HTMLAttributes, ReactNode } from 'react';
import { HasInsets, HasPlatform } from '../../types';
import { ModalRootContextInterface } from '../ModalRoot/ModalRootContext';
export interface ModalPageProps extends HTMLAttributes<HTMLDivElement>, HasInsets, HasPlatform {
    id: string;
    /**
     * Шапка модальной страницы, `<ModalPageHeader />`
     */
    header: ReactNode;
    onClose?(): void;
    /**
     * Процент, на который изначально будет открыта модальная страница
     */
    settlingHeight?: number;
    /**
     * Если высота контента в модальной странице может поменяться, нужно установить это свойство
     */
    dynamicContentHeight?: boolean;
    /**
     * @ignore
     */
    updateModalHeight?: ModalRootContextInterface['updateModalHeight'];
}
declare class ModalPage extends Component<ModalPageProps> {
    componentDidUpdate(prevProps: ModalPageProps): void;
    static defaultProps: Partial<ModalPageProps>;
    render(): JSX.Element;
}
declare const _default: typeof ModalPage;
export default _default;
