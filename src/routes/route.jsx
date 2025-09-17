import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/layout";
import { About } from "../views/about/About";
import { Home } from "../views/home/Home";
import ErrorPage from "../views/errors/Error-page";
import { loader as logementLoader } from "../routes/loader/loader";
import  {Logement} from "../views/logement/Logement";
// import { Routes } from "react-router-dom";


/**Documentation de méthode
 * @file routes.js
 * @description Ce fichier définit les routes principales de l'application en utilisant React Router.
 * Il configure les chemins, les composants à afficher et les gestionnaires d'erreur.
 */
/**
 * @constant {Object} routes
 * @description Configuration des routes de l'application avec `react-router-dom`.
 * Chaque route est encapsulée dans un composant `<Layout>` pour conserver une structure cohérente sur l'ensemble du site.
 * En cas d'erreur, une page d'erreur est affichée via `errorElement`.
 */
export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        errorElement: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
    },
    {
        path:"/about",
        element: (
            <Layout>
                <About/>
            </Layout>
        ),
        errorElement: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
    },
    {
        path: "logement/:id",
        element: (
            <Layout>
                <Logement />
            </Layout>
        ),
        loader: logementLoader,
        errorElement: (
            <Layout>
                <ErrorPage />
            </Layout>
        ),
    },
]);