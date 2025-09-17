import "./TitleCard.scss";
import PropTypes from "prop-types";


TitleCard.propTypes = {
  text: PropTypes.node.isRequired,
};

/**Documentation de méthode
 * @description
 * Ce composant permet d'afficher un titre.
 * @param {string} text - Le texte du titre.
 * @returns {JSX.Element} - Un titre.
 * @example
 * <TitleCard text="Title" />
 * @example
 * <TitleCard text="Title2" />
 */
const TitleCard = ({ text }) => {
  return (
    <div className="homeTitleContainer">
      <h2>{text}</h2>
    </div>
  );
};

export default TitleCard;
