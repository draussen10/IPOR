import {type FC, type MutableRefObject, useRef, type UIEvent, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Page.m.scss';
import {useInfiniteScroll} from 'shared/lib/hooks/useInfiniteScroll';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {getUIScrollByPath, UIActions} from 'features/UI';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {type StateSchema} from 'app/providers/StoreProvider';
import {useThrottle} from 'shared/lib/hooks/useThrottle';

interface PageProps {
    className?: string
    onScrollEnd?: () => void
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

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(UIActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(styles.page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
        </section>
    );
};
