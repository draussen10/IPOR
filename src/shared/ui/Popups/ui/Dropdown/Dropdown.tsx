import {type FC, Fragment, memo, type ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Dropdown.m.scss';
import {Menu} from '@headlessui/react';
import {type DropdownDirection} from 'shared/types/ui';
import {AppLink} from '../../../AppLink/AppLink';
import {mapDirectionClass} from '../../styles/const';
import popupStyles from '../../styles/popup.m.scss';

export interface DropdownItem {
    title?: string
    disabled?: boolean
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = memo((props) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right'
    } = props;

    return (
        <Menu as={'div'} className={classNames(styles.dropdown, {}, [className, popupStyles.popup])}>
            <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(styles.items, {}, [mapDirectionClass[direction]])}>
                {items.map(it => {
                    const content = ({active}: { active: boolean }) => (
                        <button
                            type={'button'}
                            disabled={it.disabled}
                            className={classNames(styles.item, {[styles.active]: active}, [])}
                            onClick={it.onClick}
                        >
                            {it.title}
                        </button>
                    );

                    if (it.href) {
                        return (
                            <Menu.Item as={AppLink} to={it.href} key={it.title} disabled={it.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} key={it.title} disabled={it.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
