import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import TopBar from "./components/TopBar";
import Typography from "@material-ui/core/Typography";

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
    alignItems: "center",
    marginBottom:"10%",
  },
  talkAbout: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "space-around",
    matrginTop:"30px",
  },
  img_partnaires: {
    maxWidth: "200px",
    maxHeight: "100px",
  },
  img_title: {
    maxWidth: "300px",
    maxHeight: "500px",
    merginTop: theme.spacing(10),
    borderRadius: "30px",
    margin: "30px",
  },
  img_talkAbout: {
    maxWidth: "200px",
    maxHeight: "100px",
  },
  paragraph: {
    width: "60%",
    textAlign: "justify",

  },

  undertitle: {
    margin: "40px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
  
  }
}));

const sections = [
  { title: "Notre histoire", url: "http://localhost:3000/a-propos#Histoire" },
  { title: "Nos ojectifs", url: "http://localhost:3000/a-propos#Objectifs" },
  { title: "Notre vision", url: "http://localhost:3000/a-propos#NotreVision" },
  { title: "Ils parlent de nous", url: "http://localhost:3000/a-propos#IlsEnPArlent" },
  { title: "Partenaires", url: "http://localhost:3000/a-propos#Partenaires" },
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
            <Typography gutterBottom variant="h1" component="h1">Clément Fouillet</Typography>
            <Typography gutterBottom variant="h3" component="h1">Fondateur de Cargo Bike Trade</Typography>
            
            <img
              className={classes.img_title}
              src="/assets/Clément_F_Fondateur.jpg"
            />
            </div>
          </div>
          <div className={classes.main}>
            <div className={classes.history}>
            <Typography className={classes.undertitle} gutterBottom variant="h2" component="h1" id="Histoire">Notre histoire</Typography>
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
            <Typography className={classes.undertitle} gutterBottom variant="h2" component="h1" id="Objectifs">Nos objectifs</Typography>
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
            <Typography className={classes.undertitle} gutterBottom variant="h2" component="h1" id="NotreVision">Notre vision</Typography>
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
              <p className={classes.paragraph}>
                Parce que la pollution de l’air est directement responsable
                chaque année de nombreux décès, nous souhaitons encourager
                l’essor du vélo cargo dans notre quotidien, car il s’agit d’une
                solution simple et efficace pour diminuer l’usage de véhicule à
                combustion responsables d’émissions de particules fines toxiques
                pour l’homme.
              </p>
            </div>
            </div>
            <Typography className={classes.undertitle} gutterBottom variant="h2" component="h1" id="IlsEnPArlent">Ils parlent de nous</Typography>
            <div className={classes.talkAbout}>
            <a href="https://youtu.be/UBvMiqYDE_8?t=732">
              <img
                className={classes.img_talkAbout}
                src="/assets/logo_a_propos/pause_velo.jpg"
                alt="Pause vélo"
                href="https://youtu.be/UBvMiqYDE_8?t=732"
              />
            </a>
            <a href="https://www.serialblogueuse.com/2021/06/02/10-bonnes-raisons-pour-se-deplacer-a-velo-cargo-en-ville/">
              <img
                className={classes.img_talkAbout}
                src="/assets/logo_a_propos/serial_blogueuse.jpg"
                alt="Serial Blogueuse"
                href="https://www.serialblogueuse.com/2021/06/02/10-bonnes-raisons-pour-se-deplacer-a-velo-cargo-en-ville/"
              />
              </a>
            </div>
            <Typography className={classes.undertitle} gutterBottom variant="h2" component="h1" id="Partenaires">Partenaires</Typography>
            <div id="partnaires" className={classes.partnaires}>
            <a href="https://www.cyclofix.com/?utm_term=cyclofix&utm_campaign=ACQ+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=9490984877&hsa_cam=1075025205&hsa_grp=55328601283&hsa_ad=298926109639&hsa_src=g&hsa_tgt=kwd-333483140602&hsa_kw=cyclofix&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw8vqGBhC_ARIsADMSd1DlvqcSYYdQkPFgcFNnP76KV2ANpaZF8LOKYUM_43qGhkuwdYSubxIaAoWREALw_wcB">
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/cyclofix.png"
                alt="Cyclofix"
              />
            </a>
            <a href="https://www.velhome.co/">
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/velhome.png"
                alt="Velhome"
              />
              </a>
              <a href="https://cylantro.eu/">
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/cylantro.png"
                alt="Cylantro"
              />
              </a>
            </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
