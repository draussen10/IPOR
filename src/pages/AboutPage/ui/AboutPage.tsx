import {useTranslation} from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation('pages/aboutPage');

    return (
        <div>
            {t('name')}
        </div>
    );
};

export default AboutPage;
