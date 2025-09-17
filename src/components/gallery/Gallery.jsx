import "./Gallery.scss";
import logements from "../../data/data"; // Données du Data.json
import Card from "../card/Card";
import { useState, useEffect } from "react";

/**
 * Ce composant permet de créer une galerie de logements.
 * @returns {JSX.Element} - Une galerie de logements.
 * @example
 * <Gallery />
 */
export default function Gallery() {
  const [datas, setDatas] = useState([]); // le state qui gère les données de notre data.json
  const [loading, setLoading] = useState(true); // state qui gère un loader quand on recharge un data

   
  const fetchingData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(logements); // Retourne les données du datas.json après 0.5 secondes
      }, 500);
    });
  };
  /**
   * useEffect permet de charger les données de notre data.json
   * et de les mettre à jour dans le state datas
   * et de désactiver le loader
   * @param {Function} loadDatas - Fonction qui charge les données
   * @param {object[]} datas - Les données des logements
   * @param {boolean} loading - L'état de chargement
   * @param {Function} setDatas - Fonction qui met à jour les données
   * @param {Function} setLoading - Fonction qui met à jour l'état de chargement  
   * @returns {Function} - Les données des logements
   */
  useEffect(() => {
    const loadDatas = async () => {
      try {
        const responses = await fetchingData(); // Attendre que les données soient récupérées
        setDatas(responses); // Mettre à jour le state avec les données réelles
        setLoading(false); // Désactiver le loader
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };
    loadDatas();
  }, []); // tableau de dépendance [] pour ne charger qu'une seule fois et évite les boucles infinies.

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="home_gallery">
      {datas.map((data) => (
        <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
      ))}
    </div>
  );
}
/**
 * Documentation de méthode `.map()`
 * @description
 * Ce morceau de code utilise la méthode `.map()` pour parcourir le tableau `datas` et générer une liste de composants `<Card />`. 
 * Chaque élément de `datas` est représenté par `data`, qui est un objet contenant les informations d'un logement. 
 * (comme son `id`, `title`, et `cover`). 
 * @param {object[]} datas - Les données des logements.
 * @param {object} data - Les informations d'un logement.
 * @param {string} data.id - L'identifiant du logement.
 * @param {string} data.title - Le titre du logement.
 * @param {string} data.cover - L'image de couverture du logement.
 * @returns {JSX.Element[]} - Une liste de composants `<Card />`.
*/
