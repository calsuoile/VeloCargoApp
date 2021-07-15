import MarketPlace from "../../sources/view/marketplace/Marketplace";
import axios from "axios";

export default function AdsPage({ adsCard }) {
  return <MarketPlace adsCard={adsCard} />;
}

export async function getStaticProps(props) {

  const adsCard = await axios.get("http://localhost:3030/ads");

  return {
    props: {
      adsCard: adsCard.data,
    },
    revalidate: 60,
  };
}
