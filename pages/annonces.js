import React from "react";

export default function ArticlesPage({ articles }) {
    return <ListArticles articles={articles} />;
  }
  
  export async function getStaticProps(props) {
    //faire la requête axios
    const articles = [
      {
        id: "1",
        title: "Comment transporter ton vélo cargo ?",
        photo: "https://source.unsplash.com/random?bike/1",
        text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
        date: "18/01/2021",
        author: "Jack Sparrow",
      },
      {
        id: "2",
        title: "Quel longtail peut transporter 3 enfants ?",
        photo: "https://source.unsplash.com/random?bike/2",
        text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
        date: "11/03/2021",
        author: "John Doe",
      },
      {
        id: "3",
        title: "Dois-je assurer mon vélo cargo ?",
        photo: "https://source.unsplash.com/random?bike/3",
        text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
        date: "28/05/2021",
        author: "Jane Doe",
      },
      {
        id: "4",
        title: "Comment transformer mon vélo classique en vélo cargo ?",
        photo: "https://source.unsplash.com/random?bike/4",
        text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
        date: "05/02/2021",
        author: "Lucky Luke",
      },
      {
        id: "5",
        title: "Où louer un vélo cargo ?",
        photo: "https://source.unsplash.com/random?bike/5",
        text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
        date: "30/03/2021",
        author: "Superman",
      },
      {
        id: "6",
        title: "Quel vélo cargo choisir ?",
        photo: "https://source.unsplash.com/random?bike/6",
        text: "Chez Douze-Cycles seul le « V2 » est démontable (pas le modèle « G4 ») ; Très simple à démonter, il vous faudra seulement 5 minutes muni d’une clé Allen n°14 :",
        date: "14/05/2021",
        author: "Bob Marley",
      },
    ];
  
    return {
      props: {
        articles: articles,
      },
      revalidate: 60,
    };
  }