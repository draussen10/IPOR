import {type FC, memo, type ReactNode} from 'react';
import {classNames, type Mods} from 'shared/lib/classNames/classNames';
import styles from './Drawer.m.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {Portal} from '../Portal/Portal';
import {Overlay} from '../Overlay/Overlay';
import {useModal} from 'shared/lib/hooks/useModal';

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer: FC<DrawerProps> = memo((props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const {theme} = useTheme();
    const {isMounted, isClosing, closeHandler} = useModal({isOpen, onClose});

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={closeHandler} />
                <div
                    className={styles.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
