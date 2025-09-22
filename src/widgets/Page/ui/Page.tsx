import {type FC, type MutableRefObject, useRef, type UIEvent, type ReactNode} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './Page.module.scss';
import {useInfiniteScroll} from '@/shared/lib/hooks/useInfiniteScroll';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch';
import {getUIScrollByPath, UIActions} from '@/features/ui';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {type StateSchema} from '@/app/providers/StoreProvider';
import {useThrottle} from '@/shared/lib/hooks/useThrottle';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect';
import {type TestProps} from '@/shared/types/test';

interface PageProps extends TestProps {
    className?: string
    onScrollEnd?: () => void
    children: ReactNode
}

export const Page: FC<PageProps> = (props) => {
    const {
        className,
        children,
        onScrollEnd
    } = props;
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(UIActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(styles.page, {}, [className])}
            onScroll={onScroll}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
        </main>
    );
};
