import PropTypes from "prop-types";
import './layout.scss';
import { Header } from "../components/layoutsComponents/header/Header";
import { Footer } from "../components/layoutsComponents/footer/Footer";


/**Documentation de méthode
 * @description
 * Ce composant permet de créer un layout pour l'application web.
 * @param {object} children - Les enfants du layout.
 * @returns {JSX.Element} - Un layout.
 * @example
 * <Layout>
 * Le layout sert à englober ces enfants (via les childrens)
 * Dans notre cas ici il affiche de manière permanente les éléments suivants:
 * Header -> Bar de navigation + Titre de l'application web
 * Footer -> Bas de page avec les informations concernant l'application ( Ex. Copyright )
 */
export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
