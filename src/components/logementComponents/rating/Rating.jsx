import greyStar from '../../../assets/images/grey_star.svg';
import redStar from '../../../assets/images/red_star.svg';
import PropTypes from 'prop-types';

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};

  /**Documentation de méthode 
   * @description
   * Ce composant permet de créer un système de notation.
   * @param {number} rating - La note du logement.
   * @returns {JSX.Element} - Un système de notation.
   * @example
   * <Rating rating={4} />
   * @example
   * <Rating rating={5} />
   * @example
   * <Rating rating={3} />
    */
export default function Rating({ rating }) {

    return (
        <div>
            {[...Array(5)].map((_star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                    
                )
            })}
        </div>
    )
}


