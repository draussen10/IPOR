import React, {useEffect, useState} from 'react'
import styles from './MainPage.module.scss'
import {Button} from 'shared/ui/Button'

const MainPage = () => {
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const onBug = () => {
        setError(true)
    }

    return (
        <div>
            Main
            <Button onClick={onBug}>
                Bug
            </Button>
        </div>
    )
}

export default MainPage