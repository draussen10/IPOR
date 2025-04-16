import {useTranslation} from 'react-i18next';
// eslint-disable-next-line ipor/layer-imports
import {BugButton} from '@/app/providers/ErrorBoundary';
import {Page} from '@/widgets/Page';
import {RatingCard} from '@/entities/Rating';

const MainPage = () => {
    const {t} = useTranslation('pages/mainPage');

    return (
        <Page>
            <BugButton />
            {t('name')}
            <RatingCard
                title={'Как вам статья'}
                feedbackTitle={'feedbackTitle'}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
