import {type FC, memo, type ReactNode} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Popover as HPopover} from '@headlessui/react';
import popupStyles from '../../styles/popup.m.scss';
import styles from './Popover.m.scss';
import {type DropdownDirection} from '@/shared/types/ui';
import {mapDirectionClass} from '../../styles/const';

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropdownDirection
    children: ReactNode
}

export const Popover: FC<PopoverProps> = memo((props) => {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children
    } = props;

    return (
        <HPopover
            as={'div'}
            className={classNames(styles.popover, {}, [className, popupStyles.popup])}
        >
            <HPopover.Button className={popupStyles.trigger}>{trigger}</HPopover.Button>
            <HPopover.Panel
                className={classNames(styles.panel, {}, [mapDirectionClass[direction]])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
