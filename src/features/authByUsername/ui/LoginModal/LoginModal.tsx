import {Modal} from '@/shared/ui/Modal';
import {type FC, Suspense} from 'react';
import {LoginFormAsync as LoginForm} from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({onClose, isOpen}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback='' >
                <LoginForm onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
