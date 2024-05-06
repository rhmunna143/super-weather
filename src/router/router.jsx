import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import RootLayout from '../layouts/RootLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
])

export default router;