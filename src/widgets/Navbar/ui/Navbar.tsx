import React, {useState} from 'react'
import classes from './Navbar.module.scss'
import {classNames} from 'shared/lib/classNames'
import {ComponentProps} from 'shared/types/ComponentProps'
import Button, {ThemeButton} from 'shared/ui/Button/Button'
import Modal from 'shared/ui/Modal/Modal'

interface NavbarProps extends ComponentProps {
}

const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    return (
        <div className={classNames(
            classes.navbar,
            {},
            [className]
        )}>

            <Button
                theme={ThemeButton.OUTLINED}
                onClick={() => setIsAuthModal(true)}
            >
                Войти
            </Button>

            <Modal
                isOpen={isAuthModal}
                onClose={() => setIsAuthModal(false)}
            >
                123
            </Modal>
        </div>
    )
}

export default Navbar