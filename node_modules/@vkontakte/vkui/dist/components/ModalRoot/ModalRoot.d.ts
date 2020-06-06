import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchEvent } from '../Touch/Touch';
import { HasChildren, HasPlatform } from '../../types';
import { WebviewType } from '../ConfigProvider/ConfigProviderContext';
export declare const TYPE_CARD = "modal-card";
export declare const TYPE_PAGE = "modal-page";
export interface ModalsStateEntry {
    id: string;
    onClose?: () => {};
    type?: 'modal-card' | 'modal-page';
    settlingHeight?: number;
    dynamicContentHeight?: boolean;
    expandable?: boolean;
    modalElement?: HTMLElement;
    innerElement?: HTMLElement;
    headerElement?: HTMLElement;
    contentElement?: HTMLElement;
    footerElement?: HTMLElement;
    translateY?: number;
    translateYFrom?: number;
    translateYCurrent?: number;
    touchStartTime?: Date;
    touchStartContentScrollTop?: number;
    touchMovePositive?: boolean | null;
    touchShiftYPercent?: number;
    expanded?: boolean;
    collapsed?: boolean;
    hidden?: boolean;
    contentScrolled?: boolean;
    expandedRange?: [number, number];
    collapsedRange?: [number, number];
    hiddenRange?: [number, number];
    contentScrollStopTimeout?: number;
}
export interface ModalRootProps extends HasChildren, HasPlatform {
    activeModal?: string | null;
    /**
     * Будет вызвано при закрытии активной модалки с её id
     */
    onClose?(modalId: string): void;
}
export interface ModalRootState {
    activeModal?: string;
    prevModal?: string;
    nextModal?: string;
    visibleModals?: string[];
    animated?: boolean;
    switching?: boolean;
    history?: string[];
    isBack?: boolean;
    inited?: boolean;
    touchDown?: boolean;
    dragging?: boolean;
}
declare class ModalRoot extends Component<ModalRootProps, ModalRootState> {
    constructor(props: ModalRootProps);
    private modalsState;
    private documentScrolling;
    private activeTransitions;
    private readonly maskElementRef;
    private maskAnimationFrame;
    private readonly modalRootContext;
    private readonly frameIds;
    static contextTypes: {
        window: PropTypes.Requireable<any>;
        document: PropTypes.Requireable<any>;
        webviewType: PropTypes.Requireable<WebviewType>;
    };
    get document(): Document;
    get window(): Window;
    get webviewType(): WebviewType;
    get modals(): any[];
    initModalsState(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ModalRootProps, prevState: ModalRootState): void;
    blurActiveElement(): void;
    toggleDocumentScrolling(enabled: boolean): void;
    preventTouch: (event: any) => boolean;
    pickModal(modalId: string): HTMLElement;
    /**
     * Инициализирует модалку перед анимацией открытия
     */
    initActiveModal(): void;
    initPageModal(modalState: ModalsStateEntry, modalElement: HTMLElement): void;
    initCardModal(modalState: ModalsStateEntry, modalElement: HTMLElement): void;
    checkPageContentHeight(): void;
    updateModalHeight: () => void;
    closeActiveModal(): void;
    onTouchMove: (e: TouchEvent) => void;
    onPageTouchMove(event: TouchEvent, modalState: ModalsStateEntry): void;
    onCardTouchMove(event: TouchEvent, modalState: ModalsStateEntry): void;
    onTouchEnd: (e: TouchEvent) => void;
    onPageTouchEnd(event: TouchEvent, modalState: ModalsStateEntry): void;
    onCardTouchEnd(modalState: ModalsStateEntry): void;
    onScroll: (e: React.SyntheticEvent<Element, Event>) => void;
    waitTransitionFinish(modalState: ModalsStateEntry, eventHandler: () => void): void;
    switchPrevNext(): void;
    prevNextSwitchEndHandler: () => void;
    animateTranslate(modalState: ModalsStateEntry, currentPercent?: number): void;
    animatePageHeader(modalState: ModalsStateEntry, currentPercent?: number): void;
    setMaskOpacity(modalState: ModalsStateEntry, forceOpacity?: number): void;
    /**
     * Закрывает текущую модалку
     */
    triggerActiveModalClose(): void;
    private readonly doCloseModal;
    /**
     * По клику на полупрозрачный черный фон нужно закрыть текущую модалку
     */
    onMaskClick: () => void;
    render(): JSX.Element;
}
declare const _default: typeof ModalRoot;
export default _default;
