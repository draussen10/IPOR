import {useTranslation} from 'react-i18next';
// eslint-disable-next-line ipor/layer-imports
import {BugButton} from '@/app/providers/ErrorBoundary';
import {Page} from '@/widgets/Page';

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
