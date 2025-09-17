import "./Logement.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../data/data.json";
import Carrousel from "../../components/logementComponents/carrousel/Carrousel";
import Collapse from "../../components/collapse/Collapse";
import ErrorPage from "../../views/errors/Error-page";
import Tag from "../../components/logementComponents/tag/Tag";
import Rating from "../../components/logementComponents/rating/Rating";

export function Logement() {

  const [imageSlider, setImageSlider] = useState([]);

  /**Documentation de méthode 
   * Récupère l'id de l'url
   * @param {string} id - id de l'url
   * @returns {JSX.Element} - Retourne le JSX de la page de l'hebergement
    */
  const { id } = useParams();

  /**Documentation de méthode 
   * On appelles le fichier ou sont stocker nos données de logement
   * Puis on "find" (recherche) le logement en question via l'id
   */
  const dataCurrentAccomodation = datas.find((data) => data.id === id);

 /**Documentation de méthode 
   * On récupère les images du logement en question
   * @param {string} dataCurrentAccomodation.pictures - Images du logement
   * @returns  - Retourne le JSX de la page de l'hebergement 
   */
  useEffect(() => {
    if (dataCurrentAccomodation) {
      setImageSlider(dataCurrentAccomodation.pictures);
    }
  }, [id, dataCurrentAccomodation]);

  if (!dataCurrentAccomodation) {
    return <ErrorPage />;
  }

  /** Documentation de méthode 
   * Variable name qui récupère le nom de l'hôte
   * @param {string} dataCurrentAccomodation.host.name - Nom de l'hôte
   * @returns {JSX.Element} - Retourne le JSX de la page de l'hebergement
   */
  const name = dataCurrentAccomodation.host.name.split(" ");


 /**
  * Variable rating qui récupère la note de l'hebergement
  * @param {number} dataCurrentAccomodation.rating - Note de l'hebergement
  * @param {string} dataCurrentAccomodation.description - Description de l'hebergement
  * @param {string} dataCurrentAccomodation.equipments - Equipements de l'hebergement
  * @returns {JSX.Element} - Retourne le JSX de la page de l'hebergement
  */ 
  const rating = parseInt(dataCurrentAccomodation.rating);
  const description = dataCurrentAccomodation.description;
  const equipments = dataCurrentAccomodation.equipments;

    /**
   * Documentation de méthode
   * On retourne le JSX de la page de l'hebergement
   * @returns {JSX.Element} - Retourne le JSX de la page de l'hebergement
   * @example
   * <Logement /> 
   */
  return (
    <div className="accomodation_wrapper"> 
      <Carrousel imageSlider={imageSlider} />
      <div className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{dataCurrentAccomodation.title}</h1>
            <p>{dataCurrentAccomodation.location}</p>
            <div>
              {dataCurrentAccomodation.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div>
              <div className="accomodation_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentAccomodation.host.picture}
                alt="host of this accomodation"
              />
            </div>

            <div className="accomodation_content_host_stars">
              <Rating rating={rating} />
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={"Équipements"} content={equipments} />
          </div>
        </div>
      </div>
    </div>
  );
}
