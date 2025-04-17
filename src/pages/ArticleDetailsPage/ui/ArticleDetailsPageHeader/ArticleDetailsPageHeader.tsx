import {type FC, memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import styles from './ArticleDetailsPageHeader.module.scss';
import { getRouteArticleEdit, getRouteArticles} from '@/shared/const/router';
import {Button} from '@/shared/ui/Button';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import {getArticleDetailsData} from '@/entities/Article';
import {HStack} from '@/shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props) => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const {
        className
    } = props;

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleEdit(article.id));
    }, [article?.id, navigate]);

    return (
        <HStack max justify={'between'} className={classNames(styles.articleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('backToList')}
            </Button>

            {canEdit && (
                <Button className={styles.editBtn} onClick={onEditArticle}>
                    {t('edit')}
                </Button>
            )}
        </HStack>
    );
});
