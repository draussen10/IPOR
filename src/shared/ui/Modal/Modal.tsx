import {ComponentProps} from 'shared/types/ComponentProps'
import {classNames} from 'shared/lib/classNames'
import cls from './Modal.module.scss'
import {ReactNode, useCallback, useEffect} from 'react'
import Portal from 'shared/ui/Portal/Portal'
import React from 'react'

interface ModalProps extends ComponentProps {
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
}

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    const onKeyHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler()
        }
    }, [onCloseHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyHandler)
        }

        return () => {
            window.removeEventListener('keydown', onKeyHandler)
        }
    }, [isOpen, onKeyHandler])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal