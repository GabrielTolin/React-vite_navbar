import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home />},
            { path: 'sobre', element: <About />},
            { path: 'servicos', element: <Services />},
            { path: 'contato', element: <Contact />},
        ],
    },
]);

export default router