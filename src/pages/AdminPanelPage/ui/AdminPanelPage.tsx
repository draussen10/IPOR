import {type FC, memo} from 'react';
import {Page} from 'widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page>
            Admin
        </Page>
    );
});

export default AdminPanelPage;
