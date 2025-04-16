import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticleBlockImageComponent.module.scss';
import {type ArticleImageBlock} from '../../model/types/article';
import {Text, TextAlign} from '@/shared/ui/Text';

interface ArticleBlockImageComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleBlockImageComponent: FC<ArticleBlockImageComponentProps> = memo((props) => {
    const {
        className,
        block
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <img src={block.src} alt={block.title} className={styles.image} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
