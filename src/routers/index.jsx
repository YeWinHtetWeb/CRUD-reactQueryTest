import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import BlogDetail from "../pages/BlogDetail.jsx";
import BlogForm from "../components/BlogForm.jsx";
import EditBlog from "../pages/EditBlog.jsx";
import CreateBlog from "../pages/CreateBlog.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/blog/create",
                element: <CreateBlog/>
            },
            {
                path: "/blog/:id",
                element: <BlogDetail/>
            },
            {
                path: "/blog/:id/edit",
                element: <EditBlog/>
            }
        ]
    },
]);

export default router;