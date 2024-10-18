import {useTranslation} from 'react-i18next';
import {BugButton} from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const {t} = useTranslation('pages/mainPage');

    return (
        <div>
            <BugButton />
            {t('name')}
        </div>
    );
};

export default MainPage;
