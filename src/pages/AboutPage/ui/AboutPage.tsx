import {useTranslation} from 'react-i18next';
import {Page} from 'widgets/Page/Page';

const AboutPage = () => {
    const {t} = useTranslation('pages/aboutPage');

    return (
        <Page>
            {t('name')}
        </Page>
    );
};

export default AboutPage;
