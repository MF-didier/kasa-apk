import "./style.scss";
import { Banner } from "../../components/banner/banner";
import Gallery from "../../components/gallery/Gallery";

/**
 * @URL : Localhost:PORT/
 * @description Composant JSX pour la vue 'Home'
 * @return : JSX Component
 */
export function Home() {
  return (
    <div className="homeContainer">
      <Banner text={"Chez vous, partout et ailleurs"} bannerType="home" />
      <Gallery />
    </div>
  );
}


