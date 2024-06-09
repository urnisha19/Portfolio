import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Components/HomePage/HomePage";
import ProjectsPage from "../Components/ProjectsPage/ProjectsPage";
import AboutPage from "../Components/AboutPage/AboutPage";
import ContactPage from "../Components/ContactPage/ContactPage";
import BlogsPage from "../Components/BlogsPage/BlogsPage";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/projects',
                element: <ProjectsPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/contacts',
                element: <ContactPage />
            },
            {
                path: '/blogs',
                element: <BlogsPage />
            }
        ]
    }
])
