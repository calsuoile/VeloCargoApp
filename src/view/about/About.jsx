import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  head: {
    display: "flex",
    marginTop: theme.spacing(8),
    alignItems: "center",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "block",
      marginTop: "30px",
    },
  },
  orangetitle: {
    textAlign: "center",
  },
  partnaires: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "10%",
    marginLeft: "200px",
    marginRight: "200px",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "30px",
    },
  },
  talkAbout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "350px",
    marginRight: "350px",
    marginTop: "60px",
    marginBottom: "5%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "30px",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-around",
  },
  img_partnaires: {
    maxWidth: "200px",
    maxHeight: "100px",
  },
  img_title: {
    maxWidth: "300px",
    maxHeight: "500px",
    borderRadius: "30px",
    marginLeft: "auto",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: "auto",
      marginLeft: "18px",
    },
  },
  img_talkAbout: {
    maxWidth: "200px",
    maxHeight: "100px",
  },
  paragraph: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    textAlign: "justify",
    marginLeft: "250px",
    marginRight: "250px",
    marginBottom: "5%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "block",
      marginTop: "30px",
    },
  },
  undertitle: {
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    flexDirection: "column",
  },
  clement: {
    color: "#F27C08",
  },

  apropos: {
    textAlign: "center",
    color: "black",
    fontSize: "50px",
    marginTop: "50px",
  },
  fondateur: {
    fontSize: "30px",
    color: "#F29F24",
  },
  hr: {
    width: "10%",
    height: "2px",
    backgroundColor: "#006262",
    border: "none",
    marginTop: "20px",
    marginBottom: "40px",
  },
  hr2: {
    width: "10%",
    height: "2px",
    backgroundColor: "#006262",
    border: "none",
    marginTop: "20px",
  },
  hrclement: {
    backgroundColor: "#F27C08",
    border: "none",
    height: "1px",
  },
  link: {
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      display: "block",
      marginTop: "30px",
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.apropos}
        >
          À PROPOS
        </Typography>
        <hr className={classes.hr2}></hr>
        <div className={classes.root}>
          <div className={classes.title}>
            <div className={classes.head}>
              <div className={classes.orangetitle}>
                <Typography
                  gutterBottom
                  variant="h1"
                  component="h1"
                  className={classes.clement}
                >
                  Clément Fouillet
                </Typography>
                <hr className={classes.hrclement}></hr>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="h1"
                  className={classes.fondateur}
                >
                  Fondateur de Cargo Bike Trade
                </Typography>
              </div>
              <img
                className={classes.img_title}
                src="/assets/Clément_F_Fondateur.jpg"
              />
            </div>
          </div>
          <div className={classes.main}>
            <div className={classes.history}>
              <Typography
                className={classes.undertitle}
                gutterBottom
                variant="h5"
                component="h1"
                id="Histoire"
              >
                Notre histoire
              </Typography>
              <hr className={classes.hr}></hr>
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
              <Typography
                className={classes.undertitle}
                gutterBottom
                variant="h5"
                component="h1"
                id="Objectifs"
              >
                Nos objectifs
              </Typography>
              <hr className={classes.hr}></hr>
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
              <Typography
                className={classes.undertitle}
                gutterBottom
                variant="h5"
                component="h1"
                id="NotreVision"
              >
                Notre vision
              </Typography>
              <hr className={classes.hr}></hr>
              <p className={classes.paragraph}>
                <strong>
                  « Un vélo cargo triporteur possédant une caisse de 1 500 L
                  émet 85 % de CO² en moins qu'un véhicule thermique de la même
                  capacité. »
                </strong>
                <br />
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
          <Typography
            className={classes.undertitle}
            gutterBottom
            variant="h5"
            component="h1"
            id="IlsEnPArlent"
          >
            Ils parlent de nous
          </Typography>
          <hr className={classes.hr}></hr>
          <div className={classes.talkAbout}>
            <a href="https://youtu.be/UBvMiqYDE_8?t=732" target="_blank">
              <img
                className={classes.img_talkAbout}
                src="/assets/logo_a_propos/pause_velo.jpg"
                alt="Pause vélo"
                href="https://youtu.be/UBvMiqYDE_8?t=732"
              />
            </a>
            <a
              href="https://www.serialblogueuse.com/2021/06/02/10-bonnes-raisons-pour-se-deplacer-a-velo-cargo-en-ville/"
              target="_blank"
            >
              <img
                className={classes.img_talkAbout}
                src="/assets/logo_a_propos/serial_blogueuse.jpg"
                alt="Serial Blogueuse"
                href="https://www.serialblogueuse.com/2021/06/02/10-bonnes-raisons-pour-se-deplacer-a-velo-cargo-en-ville/"
              />
            </a>
          </div>
          <Typography
            className={classes.undertitle}
            gutterBottom
            variant="h5"
            component="h1"
            id="Partenaires"
          >
            Partenaires
          </Typography>
          <hr className={classes.hr}></hr>
          <div id="partnaires" className={classes.partnaires}>
            <a
              href="https://www.cyclofix.com/?utm_term=cyclofix&utm_campaign=ACQ+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=9490984877&hsa_cam=1075025205&hsa_grp=55328601283&hsa_ad=298926109639&hsa_src=g&hsa_tgt=kwd-333483140602&hsa_kw=cyclofix&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw8vqGBhC_ARIsADMSd1DlvqcSYYdQkPFgcFNnP76KV2ANpaZF8LOKYUM_43qGhkuwdYSubxIaAoWREALw_wcB"
              target="_blank"
            >
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/cyclofix.png"
                alt="Cyclofix"
              />
            </a>
            <a href="https://www.velhome.co/" target="_blank">
              <img
                className={classes.img_partnaires}
                src="/assets/logo_a_propos/velhome.png"
                alt="Velhome"
              />
            </a>
            <a href="https://cylantro.eu/" target="_blank">
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
