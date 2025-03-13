import {type FC, memo} from 'react';
import {Page} from 'widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo((props) => {
    return (
        <Page>
            Admin
        </Page>
    );
});

export default AdminPanelPage;
