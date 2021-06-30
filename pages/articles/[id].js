import ViewArticle from "../../sources/view/articles/view-articles/ViewArticle";
import { useRouter } from "next/router";

const ArticlePage = ({ articleView, otherArticles }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <ViewArticle articleView={articleView} otherArticles={otherArticles} />
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(props) {
  const articleView = {
    id: "1",
    title: "Comment transporter ton vélo cargo ?",
    photo: "https://source.unsplash.com/random?bike/1",
    text: "Le vélo cargo ou vélo de fret est un véhicule terrestre à deux ou trois roues dérivé de la bicyclette, destiné à transporter des charges plus importantes que sur un vélo classiqueLe vélo cargo est un vélo spécifiquement conçu pour le transport de fret volumineux ou des personnes, particulièrement des enfants. Il utilise pour cela un équipement inamovible.On distingue traditionnellement les vélos biporteurs, à deux roues, des triporteurs à trois roues.Les premiers vélos cargos ont été utilisés par les commerçants pour livrer le courrier, le pain et le lait, entre autres. Au début du xxe siècle, ils étaient couramment utilisés par les professionnels pour les livraisons locales de marchandises, en particulier sous la forme de triporteurs. Au Royaume-Uni, ce type de vélo est encore parfois connu sous les noms de vélo de boucher ou vélo de boulanger, même si les bureaux de poste sont de loin les plus grands utilisateurs du vélo cargo.Avec la domination du moteur à combustion interne dans les pays industrialisés après la Seconde Guerre mondiale, les vélos de fret sont devenus moins populaires. Dans le reste du monde, cependant, ils ont continué à être fabriqués et largement utilisés.Dans les années 1980 en Europe et les années 1990 aux États-Unis, de petits fabricants souvent inspirés par des considérations écologiques ont relancé la fabrication des vélos cargos. Ce nouvel essor répond notamment à la saturation des transports motorisés dans les zones urbaines et à la pollution de l'air qui en découle.",
    date: "18/01/2021",
    photo2: "https://source.unsplash.com/random?bike/10",
    author: "Clément Fouillet",
  };

  const otherArticles = [
    {
      id: "2",
      title: "Quel Longtail Peut Transporter 3 Enfants ?",
      photo: "https://source.unsplash.com/random?bike/2",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "11/03/2021",
      author: "Clément Fouillet",
    },
    {
      id: "3",
      title: "Dois-Je Assurer Mon Vélo Cargo ?",
      photo: "https://source.unsplash.com/random?bike/3",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "28/05/2021",
      author: "Clément Fouillet",
    },
    {
      id: "4",
      title: "Comment Transformer Mon Vélo Classique En Vélo Cargo ?",
      photo: "https://source.unsplash.com/random?bike/4",
      text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
      date: "05/02/2021",
      author: "Clément Fouillet",
    },
  ];
  return {
    props: {
      articleView: articleView,
      otherArticles: otherArticles,
    },
    revalidate: 60,
  };
}

export default ArticlePage;
