import './Card.scss';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

/**Documentation de méthode 
   * @description
   * Ce composant représente une carte de logement.
   * @param {string} id - L'identifiant du logement.
   * @param {string} title - Le titre du logement.
   * @param {string} cover - L'image de couverture du logement.
   * @returns {JSX.Element} - Une carte de logement.
   * @example
   * <Card id="1" title="Beautiful Apartment" cover="path/to/image.jpg" />
   * @example
   * <Card id="2" title="Beautiful House" cover="path/to/image.jpg" />
    */
export default function Card({id, title, cover}) {

	return (
		<Link to={`/logement/${id}`} className="gallery_card">
			<img src={cover} alt={"Kasa -" + title} />
			<h3>{title}</h3>	
		</Link>
	)
}