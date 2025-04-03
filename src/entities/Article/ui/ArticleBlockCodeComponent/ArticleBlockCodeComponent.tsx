import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticleBlockCodeComponent.m.scss';
import {type ArticleCodeBlock} from '../../model/types/article';
import {Code} from '@/shared/ui/Code/Code';

interface ArticleBlockCodeComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> = memo((props) => {
    const {
        className,
        block
    } = props;

    return (
        <div className={classNames(styles.articleBlockCodeComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
