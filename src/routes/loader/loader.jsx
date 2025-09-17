import data from "../../data/data.json";

/**
 * Documentation de méthode
 * @description
 * Ce composant permet de charger les données d'un logement.
 * @param {object} params - Les paramètres de l'URL.
 * @param {string} params.id - L'identifiant du logement. | ===> logement/:id
 * @returns {object} - Les données du logement.
 * @example
 * loader({ params: { id: '1' } });
 * @example
 * loader({ params: { id: '2' } });
 * @example
 * loader({ params: { id: '3' } });
 */
export function loader({ params }) {
  const logement = data.find((logement) => logement.id === params.id);

  if (!logement) {
    throw new Response("Oups! La page que vous demandez n'existe pas.", {
      status: 404,
    });
  }

  return logement;
}

export default loader;
