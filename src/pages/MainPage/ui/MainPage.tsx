import {useTranslation} from 'react-i18next';
import {BugButton} from '@/app/providers/ErrorBoundary';
import {Page} from '@/widgets/Page/Page';

const MainPage = () => {
    const {t} = useTranslation('pages/mainPage');

    return (
        <Page>
            <BugButton />
            {t('name')}
        </Page>
    );
};

export default MainPage;
