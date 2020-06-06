import { Component, HTMLAttributes, MouseEventHandler, ReactNode, MouseEvent } from 'react';
import { HasChildren, HasInsets, HasPlatform } from '../../types';
export interface ModalCardActionInterface {
    title: string;
    action?(event: MouseEvent): void;
    mode?: 'secondary' | 'primary';
}
export interface ModalCardProps extends HTMLAttributes<HTMLElement>, HasPlatform, HasChildren, HasInsets {
    /**
     * Иконка.
     *
     * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
     */
    icon?: ReactNode;
    /**
     * Заголовок карточки
     */
    header?: string;
    /**
     * Текст, поясняющий заголовок
     */
    caption?: string;
    /**
     * Список кнопок-действий
     */
    actions?: ModalCardActionInterface[];
    /**
     * Тип отображения кнопок: вертикальный или горизонтальный
     */
    actionsLayout?: 'vertical' | 'horizontal';
    /**
     * Будет вызван при закрытии карточки жестом
     */
    onClose?(): void;
}
declare class ModalCard extends Component<ModalCardProps> {
    static defaultProps: ModalCardProps;
    onButtonClick: MouseEventHandler;
    render(): JSX.Element;
}
declare const _default: typeof ModalCard;
export default _default;
