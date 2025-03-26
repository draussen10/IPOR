import {type FC, Fragment, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ListBox.m.scss';
import {Listbox as HListbox} from '@headlessui/react';
import {Button} from '../Button/Button';
import {Text} from '../Text/Text';
import {HStack} from '../Stack';
import {type DropdownDirection} from 'shared/types/ui';

export interface ListBoxItem {
    title: string
    value: string
    disabled?: boolean
}

interface ListBoxProps {
    label?: string
    items?: ListBoxItem[]
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    className?: string
    readonly?: boolean
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.bottomLeft,
    'top left': styles.topLeft,
    'bottom right': styles.bottomRight,
    'top right': styles.topRight
};

export const ListBox: FC<ListBoxProps> = memo((props) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label
    } = props;

    return (
        <HStack gap={'8'} align={'center'} className={classNames('', {}, [className])}>
            {label && <Text text={label} />}
            <HListbox as={'div'}
                disabled={readonly}
                className={styles.listBox}
                value={value}
                onChange={onChange}
            >

                <HListbox.Button className={styles.trigger}>
                    <Button
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(
                        styles.options,
                        {},
                        [mapDirectionClass[direction]]
                    )}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({active, selected}) => (
                                <li
                                    className={classNames(
                                        styles.option,
                                        {
                                            [styles.active]: active,
                                            [styles.selected]: selected,
                                            [styles.disabled]: item.disabled
                                        },
                                        []
                                    )}
                                >
                                    {item.title}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
});
