import Logo from "../../../assets/images/logo/LOGO_WHITE.svg";
import "./Footer.scss";

/**Documentation de méthode
 * @description
 * Ce composant permet de créer un footer. Footer est le bas de page de mon application web.
 * @returns {JSX.Element} - Un footer.
 * @example
 * <Footer />
 */
export default function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Kasa" />
      <em>&copy; 2020 Kasa. All rights reserved</em>
    </footer>
  );
};
export { Footer };

