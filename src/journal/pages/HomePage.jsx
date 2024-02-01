
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../../views'

export const HomePage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView />
        </JournalLayout>
    )
}
