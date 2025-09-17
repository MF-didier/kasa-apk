import "./IntroContainer.scss"; // Style en module via un nommage d'import 'styles' le nom style n'est pas définitif (ex. css, class etc.. )
import aboutPicture from "../../assets/images/background-images/about-intro.jpg";
import { About } from "../../views/about/About";

/**Documentation de méthode
 * @description
 * @module IntroContainer
 * Ce composant permet de créer un container pour la page about
 * @returns {JSX.Element} - Un container pour la page about
 * @example
 * <IntroContainer />
 */
const IntroContainer = () => {
  return (
    <div className="IntroContainer">
      <img src={aboutPicture} alt="paysage de montagne vallonné" />
      <About />
    </div>
  );
};

export default IntroContainer;
