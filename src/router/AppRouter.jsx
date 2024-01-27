import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoute from '../journal/routes/JournalRoute'

const AppRouter = () => {
    return (
        <Routes>
            {/* Login y registro */}
            <Route path='/auth/*' element={<AuthRoutes />} />
            {/* Journal App */}
            <Route path='/*' element={<JournalRoute />} />

            <Route />
        </Routes>
    )
}

export default AppRouter