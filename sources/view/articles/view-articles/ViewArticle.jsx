import React from "react";
import { Avatar, colors, makeStyles, Typography } from "@material-ui/core";
import OtherArticlesWindow from "./components/OtherArticlesWindow";
import { Translate } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    maxHeight: 600,
  },

  otherImages: {
    maxWidth: "50%",
    borderRadius: "4px",
    margin: "20px",
  },
  container: {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  containerText: {
    // border: "1px solid black",
    width: "65%",
    marginLeft: "20px",
    marginTop: "20px",
    textAlign: "justify",
    lineHeight: "2em",
  },

  containerOtherArticles: {
    // border: `1px solid ${colors.grey[200]}`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
    margin: "20px",
  },
  authorImage: {
    display: "flex",
    marginLeft: "30px",
  },
}));

const ViewArticle = () => {
  const classes = useStyles();

  const articleView = {
    id: "1",
    title: "Qu'est-ce qu'un vélo cargo ?",
    photo: "https://source.unsplash.com/random?bike/1",
    text1:
      "Le vélo cargo ou vélo de fret est un véhicule terrestre à deux ou trois roues dérivé de la bicyclette, destiné à transporter des charges plus importantes que sur un vélo classiqueLe vélo cargo est un vélo spécifiquement conçu pour le transport de fret volumineux ou des personnes, particulièrement des enfants. Il utilise pour cela un équipement inamovible.On distingue traditionnellement les vélos biporteurs, à deux roues, des triporteurs à trois roues.Les premiers vélos cargos ont été utilisés par les commerçants pour livrer le courrier, le pain et le lait, entre autres. Au début du xxe siècle, ils étaient couramment utilisés par les professionnels pour les livraisons locales de marchandises, en particulier sous la forme de triporteurs. Au Royaume-Uni, ce type de vélo est encore parfois connu sous les noms de vélo de boucher ou vélo de boulanger, même si les bureaux de poste sont de loin les plus grands utilisateurs du vélo cargo.Avec la domination du moteur à combustion interne dans les pays industrialisés après la Seconde Guerre mondiale, les vélos de fret sont devenus moins populaires. Dans le reste du monde, cependant, ils ont continué à être fabriqués et largement utilisés.Dans les années 1980 en Europe et les années 1990 aux États-Unis, de petits fabricants souvent inspirés par des considérations écologiques ont relancé la fabrication des vélos cargos. Ce nouvel essor répond notamment à la saturation des transports motorisés dans les zones urbaines et à la pollution de l'air qui en découle.",
    text2:
      "Le vélo cargo, en particulier sous sa forme triporteur, a pendant très longtemps été un mode de déplacement privilégié pour le transport de marchandises et les livraisons. Avec l'arrivée des véhicules motorisés, en particulier des camions, il a été peu à peu délaissé.Les contraintes de circulation en ville, les nuisances liées au transport motorisé, le coût croissant de l'énergie et les émissions de gaz à effet de serre ont permis au vélo cargo de réapparaître dans les villes, d'abord dans les villes nordiques. Il a permis en outre de contrer la désaffection des commerces de proximité et des piétons en centre-ville3.Le Danemark, notamment à Copenhague, a connu une augmentation spectaculaire des vélos cargos depuis environ 2000. On en compterait en 2014 plus de 60 000 en circulation dans les rues de la capitale danoise. Dans cette ville, 25 % des familles comptant deux enfants ou plus ont un vélo cargo pour le transport de leurs enfants et de diverses marchandises. Le vélo cargo devient alors un choix en remplacement d'une voiture ou d'une deuxième voiture4.Dans ce cadre, le vélo cargo apparaît de plus en plus comme une solution adaptée pour le transport de marchandises, en particulier sur le dernier kilomètre en ville. À tel point, que l'on parle même désormais de « vélogistique », mot-valise issu des mots « vélo » et « logistique »4. Le vélo cargo peut même être utilisé pour déménager à vélo5.En France, c'est seulement en 2020 que le vélo cargo a pris son envol, les ventes ayant progressé de 354 % cette année-là, pour atteindre 11 000 unités6.",
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

  return (
    <>
      <div>
        <img
          src={articleView.photo}
          alt={articleView.title}
          className={classes.image}
        />
      </div>
      <Typography variant="h1" style={{ margin: "20px" }}>
        {articleView.title}
      </Typography>
      <div className={classes.authorImage}>
        <Avatar alt="Clément Fouillet" src="/assets/clement_fouillet.jpg" />
        <Typography
          style={{ marginLeft: "10px", marginTop: "10px", fontStyle: "italic" }}
        >
          Le {articleView.date} par {articleView.author}{" "}
        </Typography>
      </div>
      <div className={classes.container}>
        <Typography variant="body1" className={classes.containerText}>
          {articleView.text1}
          <img src={articleView.photo2} className={classes.otherImages} />
          {articleView.text2}
        </Typography>
        <div className={classes.containerOtherArticles}>
          <Typography variant="h6">Derniers articles</Typography>
          {otherArticles.map((otherArticle, index) => (
            <OtherArticlesWindow key={index} {...otherArticle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewArticle;
