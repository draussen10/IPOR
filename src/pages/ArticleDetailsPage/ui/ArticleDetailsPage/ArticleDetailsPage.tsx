import {type FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';
import {ArticleDetails} from '@/entities/Article';
import {useParams} from 'react-router-dom';
import {type ReducerList, useReducerManager} from '@/app/providers/StoreProvider/lib/useReducerManager';
import {Page} from '@/widgets/Page/Page';
import {articleDetailsPageReducer} from '../../model/slice';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {ArticleRecommendationList} from '@/features/articleRecommendationList';
import {ArticleDetailsComments} from '../ArticleDetailsComments/ArticleDetailsComments';
import {VStack} from '@/shared/ui/Stack';
import {ArticleRating} from '@/features/articleRating';

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
};

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const {id} = useParams<{ id: string }>();
    const {className} = props;

    useReducerManager(reducers, true);

    if (!id) {
        return null;
    }

    return (
        <Page className={classNames(styles.articleDetailsPage, {}, [className])}>
            <VStack gap="8" max>
                <ArticleDetailsPageHeader />
                <ArticleDetails articleId={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationList />
                <ArticleDetailsComments articleId={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
