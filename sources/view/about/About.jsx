import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TopBar from "./components/TopBar";

const useStyles = makeStyles((theme) => ({
  //   mainGrid: {
  //     marginTop: theme.spacing(3),
  //   },
  head: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: theme.spacing(8),
  },
  partnaires: {
    display: "flex",
    justifyContent: "space-around",
  },
  talkAbout: {
    display: "flex",
    justifyContent: "space-around",
  },
  title: {
    display: "flex",
    justifyContent: "space-around",
  },
  img_partnaires: {
    maxWidth: "200px",
    maxHeight: "200px",
  },
  img_title: {
    maxWidth: "300px",
    maxHeight: "500px",
    merginTop: theme.spacing(10),
  },
  img_talkAbout: {
    maxWidth: "100px",
    maxHeight: "100px",
  },
}));

const sections = [
  { title: "Notre histoire", url: "#" },
  { title: "Nos ojectifs", url: "#" },
  { title: "Notre vision", url: "#" },
  { title: "Dossier de presse", url: "#" },
  { title: "Ils parlent de nous", url: "#" },
  { title: "Partenaires", ahref: "#" },
];

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <TopBar title="A propos" sections={sections} />
        <div className={classes.root}>
          <div className={classes.title}>
            <div className={classes.head}>
              <h1>Clément Fouillet</h1>
              <h3 className={classes.description_title}>
                Fondateur de Cargo Bike Trade
              </h3>
            </div>
            <img
              className={classes.img_title}
              src="/assets/Clément_F_Fondateur.jpg"
            />
          </div>
          <div className={classes.main}>
            <div className={classes.history}>
              <h3 className={classes.subtitle}>Notre histoire</h3>
              <p className={classes.paragraph}>
                Lorsque j’étais étudiant à Bordeaux, j'avais pour habitude
                d'acheter et revendre des vélos d'occasion sur mon temps libre
                pour me faire un peu d'argent de poche. <br />
                Habitant alors un quartier familial, je voyais souvent déambuler
                des vélos cargo autour de chez moi. C'est alors que j'ai cherché
                à en acheter un. Mais ces recherches se sont vite montrées
                fastidieuses ! Aucune catégorie "Vélos cargo" sur ces sites de
                seconde main, ni même de filtres de recherche spécifiques à ces
                vélos, dont les multiples caractéristiques les rendent aussi
                complexe qu'une voiture. <br />
                C'est devant cette jungle d’annonces que l'idée de
                cargobiketrade.com est née : Une plateforme pour faciliter
                l’achat et la vente de vélos cargo d'occasion, entre
                particuliers !
              </p>
            </div>
            <div className={classes.goals}>
              <h3 className={classes.subtitle}>Nos objectifs</h3>
              <p className={classes.paragraph}>
                <strong>Vous aider dans la vente de votre vélo cargo,</strong>{" "}
                via une annonce détaillée, et des services additionnels pour
                vous faciliter la vente (contrôle technique, transport…). <br />
                <br />
                <strong>
                  Vous aider dans l'achat de votre futur vélo cargo
                </strong>{" "}
                via des services complémentaires (assurance, stationnement,
                stockage du vélo…) vision. <br />
                <br />
                <strong>
                  Proposer les meilleurs accessoires compatible avec votre
                  modèle de vélo cargo
                </strong>{" "}
                préalablement testés et éprouvés par la communauté.
              </p>
            </div>
            <div className={classes.vision}>
              <h3 className={classes.subtitle}>Notre vision</h3>
              <p className={classes.paragraph}>
                <strong>
                  « Un vélo cargo triporteur possédant une caisse de 1 500 L
                  émet 85 % de CO² en moins qu'un véhicule thermique de la même
                  capacité. »
                </strong>
              </p>
              <p className={classes.source}>
                Source :
                https://www.ecologie.gouv.fr/plan-national-developpement-cyclologistique
              </p>
              <p>
                Parce que la pollution de l’air est directement responsable
                chaque année de nombreux décès, nous souhaitons encourager
                l’essor du vélo cargo dans notre quotidien, car il s’agit d’une
                solution simple et efficace pour diminuer l’usage de véhicule à
                combustion responsables d’émissions de particules fines toxiques
                pour l’homme.
              </p>
            </div>
            <div className={classes.press}>
              <h3 className={classes.subtitle}>Dossier de presse</h3>
              <p className={classes.paragraph}></p>
            </div>
            <h3 className={classes.subtitle}>Ils parlent de nous</h3>
            <div className={classes.talkAbout}>
              {/* <p className={classes.paragraph}>Pause vélo</p> */}
              <img
                className={classes.img_talkAbout}
                src="/assets/logo_a_propos/pause_velo.jpg"
                alt="Pause vélo"
                href="https://youtu.be/UBvMiqYDE_8?t=732"
              />
              {/* <p className={classes.paragraph}>Serial Blogueuse</p> */}
              <img
                className={classes.img_talkAbout}
                src="/assets/logo_a_propos/serial_blogueuse.jpg"
                alt="Serial Blogueuse"
                href="https://www.serialblogueuse.com/2021/06/02/10-bonnes-raisons-pour-se-deplacer-a-velo-cargo-en-ville/"
              />
            </div>
            <h3 className={classes.subtitle}>Partenaires</h3>
            <div id="partnaires" className={classes.partnaires}>
              {/* <p className={classes.paragraph}>Cyclofix</p> */}
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/cyclofix.png"
                alt="Cyclofix"
              />
              {/* <p className={classes.paragraph}>Velhome</p> */}
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/velhome.png"
                alt="Velhome"
              />
              {/* <p className={classes.paragraph}>Cylantro</p> */}
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/cylantro.png"
                alt="Cylantro"
              />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
