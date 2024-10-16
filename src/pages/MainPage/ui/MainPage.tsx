import {useTranslation} from 'react-i18next';
import {BugButton} from 'app/providers/ErrorBoundary';
import {Counter} from 'entities/Counter';

const MainPage = () => {
    const {t} = useTranslation('pages/mainPage');

    return (
        <div>
            <BugButton />
            {t('name')}
            <Counter />
        </div>
    );
};

export default MainPage;
