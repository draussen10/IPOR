import {Modal} from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import {type FC} from 'react';

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
            <LoginForm />
        </Modal>
    );
};
