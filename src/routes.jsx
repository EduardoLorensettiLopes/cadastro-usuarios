import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ListUsers from './pages/ListUsers'
import EditUsers from './pages/EditUsers'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    },
    {
        path: `/edit/:id`,
        element: <EditUsers />
    }
])

export default router