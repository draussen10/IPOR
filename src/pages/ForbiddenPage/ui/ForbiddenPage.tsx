import {type FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Page} from 'widgets/Page/Page';

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage: FC<ForbiddenPageProps> = memo((props) => {
    const {t} = useTranslation();

    return (
        <Page>
            {t('No rights to selected page')}
        </Page>
    );
});

export default ForbiddenPage;
