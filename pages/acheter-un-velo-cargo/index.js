import MarketPlace from "../../sources/view/marketplace/Marketplace";
import axios from "axios";

export default function AdsPage({ adsCard }) {
  return <MarketPlace adsCard={adsCard} />;
}

export async function getStaticProps(props) {
  //faire la requête axios

  const adsCard = await axios
  .get("http://localhost:3030/ads")

  // const adsCard = [
  //   {
  //     id: "1",
  //     photo: "https://source.unsplash.com/random?bike/4",
  //     title: "Vélo Cargo",
  //     price: "1230 €",
  //     city: "Bordeaux",
  //   },
  //   {
  //     id: "2",
  //     photo: "https://source.unsplash.com/random?bike/5",
  //     title: "Vélo Cargo",
  //     price: "1380 €",
  //     city: "Bordeaux",
  //   },
  //   {
  //     id: "3",
  //     photo: "https://source.unsplash.com/random?bike/6",
  //     title: "Vélo Cargo",
  //     price: "1560 €",
  //     city: "Bordeaux",
  //   },
  //   {
  //     id: "4",
  //     photo: "https://source.unsplash.com/random?bike/7",
  //     title: "Vélo Cargo",
  //     price: "1800 €",
  //     city: "Bordeaux",
  //   },
  //   {
  //     id: "5",
  //     photo: "https://source.unsplash.com/random?bike/8",
  //     title: "Vélo Cargo",
  //     price: "2300 €",
  //     city: "Bordeaux",
  //   },
  //   {
  //     id: "6",
  //     photo: "https://source.unsplash.com/random?bike/9",
  //     title: "Vélo Cargo",
  //     price: "2580 €",
  //     city: "Bordeaux",
  //   },
  // ];

  return {
    props: {
      adsCard: adsCard.data,
    },
    revalidate: 60,
  };
}
