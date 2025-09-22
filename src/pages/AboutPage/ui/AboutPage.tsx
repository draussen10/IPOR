import {useTranslation} from 'react-i18next';
import {Page} from '@/widgets/Page';

const AboutPage = () => {
    const {t} = useTranslation('pages/aboutPage');

    return (
        <Page data-testid={'AboutPage'}>
            {t('name')}
        </Page>
    );
};

export default AboutPage;
