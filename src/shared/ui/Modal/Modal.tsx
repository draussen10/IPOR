import {classNames, type Mods} from '@/shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import React, {type ComponentProps, type FC, type ReactNode} from 'react';
import {Portal} from '../Portal/Portal';
import {Overlay} from '../Overlay/Overlay';
import {useModal} from '@/shared/lib/hooks/useModal';
import {useTheme} from '@/app/providers/ThemeProvider';

interface ModalProps extends ComponentProps<FC> {
    className?: string
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        children,
        className,
        onClose,
        isOpen,
        lazy
    } = props;

    const {theme} = useTheme();
    const {isMounted, isClosing, closeHandler} = useModal({isOpen, onClose});

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={closeHandler}/>
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
