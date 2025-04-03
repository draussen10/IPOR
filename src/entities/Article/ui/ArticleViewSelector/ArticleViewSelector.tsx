import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticleViewSelector.m.scss';
import {ArticleView} from '../../model/types/article';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import {Button, ButtonTheme} from '@/shared/ui/Button/Button';
import {Icon} from '@/shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props) => {
    const {
        className,
        view,
        onViewClick
    } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    key={index}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {[styles.notSelected]: viewType.view !== view})}
                    />
                </Button>
            ))}
        </div>
    );
});
