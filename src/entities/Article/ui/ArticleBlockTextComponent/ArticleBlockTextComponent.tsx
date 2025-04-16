import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticleBlockTextComponent.module.scss';
import {type ArticleTextBlock} from '../../model/types/article';
import {Text} from '@/shared/ui/Text';

interface ArticleBlockTextComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = memo((props) => {
    const {
        className,
        block
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={styles.title}
                />
            )}

            {block.paragraphs.map((paragraph, index) => {
                return (
                    <Text
                        key={index}
                        text={paragraph}
                        className={styles.paragraph}
                    />
                );
            })}
        </div>
    );
});
