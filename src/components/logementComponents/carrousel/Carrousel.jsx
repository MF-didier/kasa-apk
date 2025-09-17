import "./Carrousel.scss";
import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Installer la dépendance fontawesom pour les icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

Carrousel.propTypes = {
  /**Documentation de méthode
   * @description
   * Liste des images à afficher dans le carrousel.
   * Chaque élément est une URL d'image.
   * @type {string[]}
   * @example ["urlImg0", "urlImg1", "urlImg2"]
   */
  imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/**Documentation de méthode
 * @description
 * Composant de carrousel permettant d'afficher une liste d'images avec navigation.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.imageSlider - Liste des URLs des images à afficher.
 * @returns {JSX.Element} - Un carrousel d'images interactif.
 * @example
 * <Carrousel imageSlider={["path/to/image1.jpg", "path/to/image2.jpg"]} />
 */
export default function Carrousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const countImages = imageSlider.length;

  /**Documentation de méthode
   * @description
   * Passe à l'image suivante dans le carrousel.
   * @returns {void}
   * @example
   * handleNext();
   */
  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };

  /**Documentation de méthode
   * @description
   * Passe à l'image précédente dans le carrousel.
   * @returns {void}
   * @example
   * handlePrevious();
   */
  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  return (
    <div className="carrouselContainer">
      <img
        src={imageSlider[currentIndex]}
        alt={" index : " + (currentIndex + 1)}
        className="currentImg"
      />
      {countImages <= 1 ? (
        ""
      ) : (
        <>
          <div className="counterPosition">
            {currentIndex + 1} / {countImages}
          </div>
          <div className="buttonsContainer">
            <button type="button" onClick={handlePrevious} className="left">
              <FontAwesomeIcon icon={faChevronLeft} color="white" />
            </button>
            <button type="button" onClick={handleNext} className="right">
              <FontAwesomeIcon icon={faChevronRight} color="white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
