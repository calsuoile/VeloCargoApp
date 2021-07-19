import MarketPlace from "../../sources/view/marketplace/Marketplace";
import axios from "axios";

export default function AdsPage({ adsCard }) {
  return <MarketPlace adsCard={adsCard} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "triporteur" } },
      { params: { type: "biporteur" } },
      { params: { type: "tricycle" } },
      { params: { type: "longtrail" } },
      { params: { type: "remorque" } },
      { params: { type: "accessoire" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {
  const adsCard = await axios.get(
    `http://localhost:3030/ads?type=${props.params.type}`
  );

  return {
    props: {
      adsCard: adsCard.data,
    },
    revalidate: 60,
  };
}
